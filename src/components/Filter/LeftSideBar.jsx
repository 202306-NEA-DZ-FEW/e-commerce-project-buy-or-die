import React from "react"
import { useState, useEffect } from "react"
import { fetcher } from "@/Utils/API"
import { useRouter } from "next/router"
import Link from "next/link"

function LeftSideBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState(null)
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("products/categories")
      setData(data)
    }
    fetchData()
  }, [])

  const handleCategoryClick = (category) => {
    router.push({
      pathname: router.pathname,
      query: { category },
    })
    setSelectedCategory(category)
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        onClick={toggleDrawer}
        className="fixed right-4 bottom-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        {isOpen ? "Close" : "Open"} Filter
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Filter</h1>
          <ul className="mt-4">
            <Link href={`/products`}>
              <button class="text-base font-semibold leading-6 text-white-900">
                All
              </button>
            </Link>
            {data?.map((category, index) => (
              <>
                <li>
                  <button
                    class="text-base font-semibold leading-6 text-white-900"
                    onClick={() => handleCategoryClick(category)}
                    key={index}
                  >
                    {category}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="z-10 fixed top-0 left-0 w-full h-full bg-black opacity-50 "
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  )
}

export default LeftSideBar
