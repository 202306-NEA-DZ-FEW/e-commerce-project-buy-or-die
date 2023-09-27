import React from "react"
import Link from "next/link"

export default function HomeButton() {
  return (
    <div>
      <Link
        href={"./products"}
        className="text-white bg-gradient-to-br cursor-none from-gray-400 to-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Check Products
      </Link>
    </div>
  )
}
