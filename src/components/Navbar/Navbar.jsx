import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "firebase/auth"
import { auth } from "@/Utils/firebase"
import { useState, useEffect } from "react"
import SearchComponent from "../Search/Searchbar"

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
    <nav className="h-14 flex justify-center overflow-hidden ml-20 bg-transparent border p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <button className="bg-transparent text-black px-4 py-2 rounded-full">
          <Image src="/FilterRight.svg" width={50} height={50} />
        </button>
        <div className="text-xl font-bold">
          <Image src="/Sougna_1.png" width={80} height={80} />
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <SearchComponent />

          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
        <div className="flex flex-row items-center space-x-4">
          <button>
            <Link href="/cart">Cart</Link>
          </button>
          {user ? (
            <div className="flex flex-row gap-4 container text-center items-center font-bold ">
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
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
