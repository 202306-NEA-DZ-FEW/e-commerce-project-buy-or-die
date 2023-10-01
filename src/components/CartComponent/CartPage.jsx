import FormatePrice from "@/components/Cards/FormatePrice"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/redux/shopperSlice"
import Link from "next/link"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { auth, db } from "@/Utils/firebase"
import Image from "next/image"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

function CartPage() {
  const productData = useSelector((state) => state.shopper.productData)
  const stripePromise = loadStripe(process.env.stripe_public_key)
  const dispatch = useDispatch()
  const [totalOldPrice, setTotalOldPrice] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const [totalamt, setTotalAmt] = useState(0)
  const userInfo = useSelector((state) => state.shopper.userInfo)

  const cartCollectionRef = collection(db, "Cart")
  console.log(userInfo?.email)
  const addcart = async (e) => {
    await addDoc(cartCollectionRef, {
      name: productData,
      uid: auth?.currentUser?.uid,
    })
  }

  useEffect(() => {
    let oldprice = 0
    let savings = 0
    let amt = 0
    productData.map((item) => {
      oldprice += item.oldprice * item.quantity
      savings += item.oldprice - item.newprice
      amt += item.newprice * item.quantity
      return
    })
    setTotalOldPrice(oldprice)
    setTotalSavings(savings)
    setTotalAmt(amt)
  }, [productData])

  const handleCheckout = async () => {
    addcart()
    const stripe = await stripePromise

    fetch("/api/checkoutpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: productData,
        email: userInfo?.email,
      }),
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (session) {
        return stripe.redirectToCheckout({ sessionId: session.id })
      })
      .then(function (result) {
        if (result.error) {
          alert(result.error.message)
        }
      })
  }

  return (
    <div className="max-w-contentContainer mx-auto mr-[5%] ml-[10%]">
      <div className="w-full py-10">
        <div className="w-full flex gap-10">
          <div className="w-2/3 flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-black">
              Cart{" "}
              <span className="text-lightText font-normal">
                ({productData.length} items)
              </span>
            </h1>
            <div>
              <div className="text-xl font-bold flex items-center gap-2 mb-2">
                <p>All Product :</p>
              </div>

              <div>
                {productData.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                  >
                    <div className="w-3/4 flex items-center gap-2">
                      <img
                        className="w-32"
                        width={500}
                        height={500}
                        src={item.image}
                        alt="productimg"
                      />
                      <div>
                        <h2 className="text-base text-zinc-900">
                          {item.title}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {item.description}
                        </p>
                        <p className="text-sm text-zinc-500">
                          price: ${item.newprice}
                        </p>
                        <p className="text-sm text-zinc-500">Free Shipping</p>

                        <div>
                          <button
                            onClick={() =>
                              dispatch(deleteItem({ _id: item._id }))
                            }
                            className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300"
                          >
                            Remove
                          </button>
                          <div>
                            <button
                              onClick={() =>
                                dispatch(
                                  plusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.thumbnail,
                                    newprice: item.newprice,
                                    oldprice: item.price,
                                    discountPercentage: item.discountPercentage,
                                    rating: item.rating,
                                    stock: item.stock,
                                    quantity: 1,
                                    description: item.description,
                                  }),
                                )
                              }
                              className="w-8 h-8 mx-1 pb-5 text-xl font-semibold border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                              +
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(
                                  minusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    image: item.thumbnail,
                                    newprice: item.newprice,
                                    oldprice: item.price,
                                    discountPercentage: item.discountPercentage,
                                    rating: item.rating,
                                    stock: item.stock,
                                    quantity: 1,
                                    description: item.description,
                                  }),
                                )
                              }
                              className="w-8 h-8 mx-1 pb-5 text-xl font-semibold border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-3/4 flex items-center gap-2"></div>
                    <div classname="w-1/4 text-right flex flex-col items-end gap-1">
                      <p className="font-semibold text-xl text-[#2a8703]">
                        <FormatePrice amount={item.newprice * item.quantity} />
                      </p>
                      <p className="text-sm line-through text-red-500">
                        <FormatePrice amount={item.oldprice * item.quantity} />
                      </p>
                      <div className="flex items-center text-xs gap-2">
                        <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                          save
                        </p>

                        <p className="text-[#2a8703] font-semibold">
                          <FormatePrice
                            amount={
                              item.oldprice * item.quantity -
                              item.newprice * item.quantity
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => dispatch(resetCart())}>Reset Cart</button>
            </div>
          </div>
          <div className="w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4">
            <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
              <div className="text-xl font-bold flex items-center gap-2 mb-2">
                <p>Checkout :</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm flex justify-between">
                  <p className="font-semibold">
                    Total : <span>({productData.length} items)</span>
                  </p>
                  <p className="line-through text-zinc-500 text-base">
                    <FormatePrice amount={totalOldPrice} />
                  </p>
                </div>
                <div className="text-sm flex justify-between">
                  <p className="font-semibold">Savings :</p>
                  <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-2[2px] rounded-lg flex">
                    <FormatePrice amount={totalSavings} />
                  </p>
                </div>
                <div className="text-sm flex justify-between">
                  <p className="font-semibold">Total Amount :</p>
                  <p className="text-[#2a8703] font-bold text-base">
                    <FormatePrice amount={totalamt} />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4">
              <div className="flex flex-col gap-1">
                <div className="text-sm flex justify-between">
                  <p className="font-semibold">Shipping : </p>
                  <p className=" text-zinc-500 text-base">Free</p>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <img className="w-20" src="/dhl.png" alt="shipping" />
                    <p className="font-bold">DHL</p>
                    <p>Shipping available</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <img className="w-10" src="/ups.png" alt="shipping" />
                    <p className="font-bold">UPS</p>
                    <p>Shipping available</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                    <img className="w-10" src="/postal.svg" alt="shipping" />
                    <p className="font-bold">POSTAL</p>
                    <p>Shipping available</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <p className="font-bold text-lg">Total Price :</p>
                <p className="text-[#2a8703] font-bold text-lg">
                  <FormatePrice amount={totalamt} />
                </p>
              </div>
              {userInfo ? (
                <button
                  onClick={handleCheckout}
                  className="w-full text-white h-10 rounded-md font-semibold duration-300 bg-green-700 hover:bg-hoverBg"
                >
                  Checkout{" "}
                </button>
              ) : (
                <Link
                  className="text-sm text-center text-red-500 mt-4 font-semibold"
                  href="/login"
                >
                  <button>Please Sign In for Checkout</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
