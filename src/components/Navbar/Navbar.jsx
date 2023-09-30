import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "firebase/auth"
import { auth } from "@/Utils/firebase"
import { useState, useEffect } from "react"
import SearchComponent from "../Search/Searchbar"
import Dropdown from "../Dropdown"
import { useSelector } from "react-redux"

const NavBar = () => {
  const productData = useSelector((state) => state.shopper.productData)
  const [user, setUser] = useState(null)
  const [totalAmt, setTotalAmt] = useState("")

  useEffect(() => {
    let price = 0
    productData.map((item) => {
      price += item.newprice * item.quantity
      return price
    })
    setTotalAmt(price.toFixed(2))
  }, [productData])

  const handleSingOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const logged = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return () => {
      logged()
    }
  }, [])

  return (
    <nav className="h-14 flex items-center bg-transparent text-black">
      <div
        style={{
          filter: "drop-shadow(5px 25px 10px #000000)",
          position: "fixed",
          width: "100%",
          zIndex: "9999",
        }}
        className=" flex justify-between border bg-white bg-opacity-30 rounded-3xl items-center w-full"
      >
        <div className="flex ">
          <button className="bg-transparent text-black rounded-full">
            <Image src="/FilterRight.svg" alt="List" width={50} height={50} />
          </button>
          <Image
            className="ml-20"
            src="/Sougna_1.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>

        <ul className="flex space-x-28">
          <li>
            <Link
              href="/"
              className="font-bold hover:text-blue-500 hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="font-bold hover:text-blue-500 hover:underline"
            >
              Products
            </Link>
          </li>
        </ul>
        <div className="flex flex-row items-center ">
          <SearchComponent />
          <button>
            <div className="mt-2 flex flex-col justify-center items-center gap-0 h-12 px-5 rounded-sm">
              <Link href="/cart">
                <Image
                  src="/Cart.svg"
                  alt="shopping-cart"
                  width={30}
                  height={30}
                />
              </Link>
              <p>${totalAmt}</p>
              <span className="absolute w-5 h-5 mt-4 bg-yellow-500 text-black top-0 ml-9 rounded-lg">
                {productData.length > 0 ? productData.length : 0}
              </span>
            </div>
          </button>
          <div className="pr-5">
            <Dropdown />
          </div>

          {/* {user ? (
            <div className="flex flex-row container text-center font-bold ">
              <button
                onClick={handleSingOut}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
                Logout
              </button>{" "}
              {`${user.displayName}`}{" "}
            </div>
          ) : (
            <Link href={`./login`}>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
