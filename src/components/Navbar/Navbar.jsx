import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "firebase/auth"
import { auth } from "@/Utils/firebase"
import { useState, useEffect } from "react"
import SearchComponent from "../Search/Searchbar"
import Dropdown from "../Dropdown"

const NavBar = () => {
  const [user, setUser] = useState(null)
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
    <nav className="h-14 flex overflow-hidden items-center bg-transparent border text-black">
      <div className=" mx-auto flex justify-between items-center w-full fixed">
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
          <li>
            <Dropdown />
          </li>
        </ul>
        <div className="flex flex-row items-center space-x-4">
          <SearchComponent />
          <button>
            <Link href="/cart">
              <Image
                src="/Cart.svg"
                alt="shopping-cart"
                width={30}
                height={30}
              />
            </Link>
          </button>

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
