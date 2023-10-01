import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import RightCard from "@/components/Cards/RightHome"
import LeftCard from "@/components/Cards/LeftHome"
import styles from "@/styles/Carousel.module.css"

const Carousels = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("products")
      setProducts(data.products)
      setLoading(false)
    }

    fetchData()
  }, [])

  const handleNextSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + 1) % Math.ceil(products.length / 2),
    )
  }

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + Math.ceil(products.length / 2)) %
        Math.ceil(products.length / 2),
    )
  }

  return (
    <div>
      <div className="flex justify-center items-end pt-10 pb-[180px] ">
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="pr-[20px]"
            data-carousel-prev=""
            onClick={handlePrevSlide}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6  dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <div className={`${styles.diffGap} flex gap-96`}>
            {products.map((product, index) => {
              if (index === currentSlide) {
                return (
                  <React.Fragment key={product.id}>
                    <LeftCard
                      pid={product.id}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      discountPercentage={product.discountPercentage}
                      title={product.title}
                      rating={product.rating}
                      description={product.description}
                    />
                  </React.Fragment>
                )
              } else if (index === currentSlide + 1) {
                return (
                  <React.Fragment key={product.id}>
                    <RightCard
                      pid={product.id}
                      thumbnail={product.thumbnail}
                      price={product.price}
                      discountPercentage={product.discountPercentage}
                      title={product.title}
                      rating={product.rating}
                      description={product.description}
                    />
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>
          <button
            type="button"
            className="pl-36 h-full cursor-pointer group focus:outline-none"
            data-carousel-next=""
            onClick={handleNextSlide}
          >
            <span className="inline-flex justify-center items-center rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousels
