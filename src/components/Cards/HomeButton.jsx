import React from "react"
import { useRouter } from "next/router"
import styles from "@/styles/HomeButton.module.css"

export default function HomeButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push("./products")
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className={`${styles.bounceButton} text-white bg-gradient-to-br from-gray-400 to-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      >
        Check Products
      </button>
    </div>
  )
}
