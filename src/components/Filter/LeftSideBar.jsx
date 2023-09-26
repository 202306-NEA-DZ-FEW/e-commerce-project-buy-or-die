import React from "react"
import { useState, useEffect } from "react"
import { fetcher } from "@/Utils/API"
import { useRouter } from "next/router"

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(true)
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

  const handleClose = () => {
    setIsOpen(false)
  }
  if (!isOpen) {
    return null
  }

  const handleCategoryClick = (category) => {
    router.push({
      pathname: router.pathname,
      query: { category },
    })
    setSelectedCategory(category)
  }

  return (
    <div>
      <div
        class="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        produc
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 overflow-hidden">
          <div class=" absolute inset-0 overflow-hidden">
            <div class=" pointer-events-none fixed inset-y-0 left-0 flex ">
              <div class="pointer-events-auto relative w-screen max-w-md">
                <div class="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span class="absolute -inset-2.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <h1
                      class="text-base font-bold leading-6 text-gray-900"
                      id="slide-over-title"
                    >
                      categories :
                    </h1>
                    {data?.map((category, index) => (
                      <>
                        <ul>
                          <button
                            class="text-base font-semibold leading-6 text-gray-900"
                            onClick={() => handleCategoryClick(category)}
                            key={index}
                          >
                            {category}
                          </button>
                        </ul>
                      </>
                    ))}
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar
