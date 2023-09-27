import React from "react"
import Link from "next/link"
import Image from "next/image"
const NavBar = () => {
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
            <Link href="/cart">Cart</Link>
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
        </div>
      </div>
    </nav>
  )
}

export default NavBar
