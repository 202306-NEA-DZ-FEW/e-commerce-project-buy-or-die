import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import toast, { Toaster } from "react-hot-toast"
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
  addToCart,
} from "@/redux/shopperSlice"
import ItemCard from "../../components/Cards/ItemCard"
import Link from "next/link"
import StarRating from "../../components/Cards/StarRating"

export default function Product({ data, data1, data2, data3, data4 }) {
  const [mainImage, setmainImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.shopper.productData)

  const newprice = (
    data.price -
    (data.price * data.discountPercentage) / 100
  ).toFixed(2)

  const item = productData.map((item) => item)
  console.log(item)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "14px",
      }}
    >
      <div className="flex flex-row pt-8 justify-center items-center gap-2">
        {/* the 3 side pics  */}
        <div className="flex gap-5 flex-col">
          <img
            style={{
              width: "152px",
              height: "167px",
              borderRadius: "20px",
              border: "1px black solid",
              borderTopColor: "transparent",
            }}
            src={`${data.images[1]}`}
          />
          <img
            style={{
              width: "152px",
              height: "168px",
              border: "1px black solid",
              borderRadius: "20px",
            }}
            src={`${data.images[2]}`}
          />
          <img
            style={{
              width: "152px",
              height: "167px",
              border: "1px black solid",
              borderRadius: "20px",
            }}
            src={`${data.images[3]}`}
          />
        </div>

        {/*pricipal pic and side info */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* pricipal pic*/}
          <div className="flex mt-5 flex-col items-center">
            <img
              style={{
                width: "444px",
                height: "530px",
                background: "linear-gradient(0deg, #F0EEED 0%, #F0EEED 100%)",
                border: "double",
                borderRadius: "20px",
              }}
              src={`${data.images[mainImage]}`}
            />
            <div
              className="flex"
              style={{
                gap: "16px",
              }}
            >
              <div className="flex space-x-6 justify-center items-center pt-2">
                {data.images.map((image, index) => (
                  <button key={index} onClick={() => setmainImage(index)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-col sm:flex-row p-5 border rounded-lg">
            {/* Title */}
            <div className="text-6xl pt-7 font-semibold break-words">
              {" "}
              {/* 3 times bigger */}
              {data.title}
            </div>
            {/* Price and Discount */}
            <div className="flex pt-4 items-center mt-3 sm:mt-0">
              <div className="text-6xl font-semibold">
                {" "}
                {/* 3 times bigger */}$
                {Math.floor(
                  data.price - (data.price * data.discountPercentage) / 100,
                )}
              </div>

              <div className="pl-1 text-gray-500 text-3xl line-through ml-3">
                {" "}
                {/* 3 times bigger */}${data.price}
              </div>

              <div className="pl-6 text-red-500 font-semibold text-xl">
                {" "}
                {/* 3 times bigger */}-{data.discountPercentage}%
              </div>
            </div>
            {/* Rating */}
            <div className="flex pt-4 items-center mt-3">
              <StarRating rating={data.rating} />
              <div className="ml-2 text-3xl font-medium">
                {data.rating}/5
              </div>{" "}
              {/* 3 times bigger */}
            </div>
            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row pt-4 items-center mt-3">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1)
                    }
                  }}
                  className="bg-[#405454] text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="text-3xl font-bold">{quantity}</span>{" "}
                {/* 3 times bigger */}
                <button
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                  className="bg-[#405454] text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    dispatch(
                      addToCart({
                        _id: data.id,
                        title: data.title,
                        image: data.thumbnail,
                        newprice: newprice,
                        discountPercentage: data.discountPercentage,
                        rating: data.rating,
                        stock: data.stock,
                        quantity: 1,
                        oldprice: data.price,
                      }),
                    )
                  }
                  toast.success(
                    `${data.title.substring(0, 20)} is added to cart`,
                  )
                }}
                className="bg-[#405454] rounded-lg overflow-hidden items-center gap-12 inline-flex text-white text-3xl font-satoshi font-medium break-words mt-3 sm:mt-0 ml-0 sm:ml-3 px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
            {/* Product Details */}
            <div className="text-3xl pt-6 font-medium mt-5">
              Product Details
            </div>{" "}
            {/* 3 times bigger */}
            {/* Description */}
            <div className="mt-2 sm:mt-5 text-gray-600 text-xl">
              {" "}
              {/* 3 times bigger */}
              {data.description}
            </div>
          </div>
        </div>
      </div>

      {/** Rcomended Items */}
      <div className="container mx-auto mt-20">
        <div className="text-4xl font-bold text-center mb-10">
          You may like!
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          <Link href={`/products/${data1.id}`} className="w-full">
            <ItemCard
              thumbnail={data1.thumbnail}
              price={data1.price}
              discountPercentage={data1.discountPercentage}
              title={data1.title}
              rating={data1.rating}
            />
          </Link>
          <Link href={`/products/${data2.id}`} className="w-full">
            <ItemCard
              thumbnail={data2.thumbnail}
              price={data2.price}
              discountPercentage={data2.discountPercentage}
              title={data2.title}
              rating={data2.rating}
            />
          </Link>
          <Link href={`/products/${data3.id}`} className="w-full">
            <ItemCard
              thumbnail={data3.thumbnail}
              price={data3.price}
              discountPercentage={data3.discountPercentage}
              title={data3.title}
              rating={data3.rating}
            />
          </Link>
          <Link href={`/products/${data4.id}`} className="w-full">
            <ItemCard
              thumbnail={data4.thumbnail}
              price={data4.price}
              discountPercentage={data4.discountPercentage}
              title={data4.title}
              rating={data4.rating}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.query

  const new1 = parseInt(productId, 10) + 1
  const new2 = parseInt(productId, 10) + 2
  const new3 = parseInt(productId, 10) + 3
  const new4 = parseInt(productId, 10) + 4

  const response = await fetch(`https://dummyjson.com/products/${productId}`)
  const data = await response.json()

  const response1 = await fetch(`https://dummyjson.com/products/${new1}`)
  const data1 = await response1.json()

  const response2 = await fetch(`https://dummyjson.com/products/${new2}`)
  const data2 = await response2.json()

  const response3 = await fetch(`https://dummyjson.com/products/${new3}`)
  const data3 = await response3.json()

  const response4 = await fetch(`https://dummyjson.com/products/${new4}`)
  const data4 = await response4.json()

  return { props: { data, data1, data2, data3, data4 } }
}
