import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "firebase/auth"
import { auth } from "@/Utils/firebase"
import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"

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
    <nav className="bg-transparent p-4 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <button className="bg-transparent text-black px-4 py-2 rounded-full">
          <Image src="/FilterRight.svg" width={50} height={50} />
        </button>
        <div className="text-xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full px-4 py-2 bg-gray-100 focus:outline-none"
          />
          <button className="bg-transparent text-black px-4 py-2 rounded-full">
            <img src="/akar-icons_search.svg" width={20} height={20} />
          </button>
          <button>
            <Link href="/cart">Cart</Link>
          </button>
          {user ? (
            <div className="flex flex-row gap-4 container text-center flex items-center font-bold ">
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
