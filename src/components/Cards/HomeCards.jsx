import React, { useState } from "react"

import HomeButton from "./HomeButton"

export default function HomeCard() {

  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex)
  }

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1))
  }

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1))
  }

  return (

    <div style={{ padding: "10px", width: "107%" }}>
      <div>
        <div style={{ right: "1%" }} className="relative" id="relative">
          <header>
            <div
              className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: "63%", left: "8%" }}
            >
              <HomeButton />
            </div>
            <div

              id="indicators-carousel"
              className="relative"
              data-carousel="static"
            >

              <div
                className="overflow-hidden relative"
                style={{ height: "450px" }}
              >

                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${
                    activeSlide === 0 ? "translate-x-0" : "-translate-x-full"
                  }`}
                >

                  <img
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    src="/images/bb.jpg"
                    alt="Image 1"
                  />

                </div>
                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${
                    activeSlide === 1 ? "translate-x-0" : "-translate-x-full"
                  }`}
                >

                  <img
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    src="/images/nn.png"
                    alt="Image 2"
                  />

                </div>
                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${
                    activeSlide === 2 ? "translate-x-0" : "-translate-x-full"
                  }`}
                >

                  <img
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    src="/images/ww.jpg"
                    alt="Image 3"
                  />

                </div>
                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${
                    activeSlide === 3 ? "translate-x-0" : "-translate-x-full"
                  }`}
                >

                  <img
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    src="/images/3dyFAn.webp"
                    alt="Image 4"
                  />


                </div>
                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform ${
                    activeSlide === 4 ? "translate-x-0" : "-translate-x-full"
                  }`}
                >

                  <img
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    src="/images/4902587.jpg"
                    alt="Image 5"
                  />
                </div>
              </div>
              <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 transform -translate-x-1/2">
                <button
                  type="button"
                  className={`w-3 h-3 cursor-none rounded-full ${
                    activeSlide === 0
                      ? "bg-white"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-green-800"

                  }`}
                  aria-current={activeSlide === 0 ? "true" : "false"}
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                  onClick={() => handleSlideChange(0)}
                ></button>
                <button
                  type="button"

                  className={`w-3 h-3 cursor-none rounded-full ${
                    activeSlide === 1
                      ? "bg-white"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-green-800"

                  }`}
                  aria-current={activeSlide === 1 ? "true" : "false"}
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                  onClick={() => handleSlideChange(1)}
                ></button>
                <button
                  type="button"

                  className={`w-3 h-3 cursor-none rounded-full ${
                    activeSlide === 2
                      ? "bg-white"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-green-800"

                  }`}
                  aria-current={activeSlide === 2 ? "true" : "false"}
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                  onClick={() => handleSlideChange(2)}
                ></button>
                <button
                  type="button"

                  className={`w-3 h-3 cursor-none rounded-full ${
                    activeSlide === 3
                      ? "bg-white"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-green-800"

                  }`}
                  aria-current={activeSlide === 3 ? "true" : "false"}
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                  onClick={() => handleSlideChange(3)}
                ></button>
                <button
                  type="button"

                  className={`w-3 h-3 cursor-none rounded-full ${
                    activeSlide === 4
                      ? "bg-white"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-green-800"

                  }`}
                  aria-current={activeSlide === 4 ? "true" : "false"}
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                  onClick={() => handleSlideChange(4)}
                ></button>
              </div>
              <button
                type="button"

                className="flex absolute top-0 left-0 z-10 justify-start items-center px-4 h-full cursor-pointer group focus:outline-none"

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
              <button
                type="button"

                className="flex absolute top-0 right-0 z-10 justify-end items-center px-4 h-full cursor-pointer group focus:outline-none"

                data-carousel-next=""
                onClick={handleNextSlide}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
          </header>
        </div>
      </div>
    </div>
  )
}
