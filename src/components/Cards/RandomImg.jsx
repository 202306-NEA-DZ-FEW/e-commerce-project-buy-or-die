import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import styles from "@/styles/RandomImg.module.css"

const RandomImages = () => {
  const [imageUrls, setImageUrls] = useState([])
  const [currentImages, setCurrentImages] = useState([null, null, null])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
      const data = await fetcher("products")
      if (data) {
        const products = data.products

        const selectedImages = products.map((product) => {
          const images = product.images
          const randomIndex = Math.floor(Math.random() * images.length)
          return images[randomIndex]
        })

        // Shuffle the array of image URLs
        const shuffledImages = selectedImages.sort(() => Math.random() - 0.5)

        setImageUrls(shuffledImages)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      const newImages = [...currentImages]
      newImages[currentIndex] =
        imageUrls[Math.floor(Math.random() * imageUrls.length)]
      setCurrentImages(newImages)
      setCurrentIndex((currentIndex + 1) % 3)
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [currentImages, currentIndex, imageUrls])

  return (
    <div className="flex justify-center">
      <div
        style={{
          border: "",
          color: "#405454",
          fontSize: "36px",
          fontFamily: "Satoshi",
          fontWeight: 400,
          lineHeight: "22px",
          wordWrap: "break-word",
          width: "1000px",
        }}
        className={`${styles.randomWidth} flex justify-center relative mb-40 mt-10 rounded-lg bg-[#C1DCDC]`}
      >
        <div className="flex flex-col relative  items-center text-13xl">
          <div className="flex flex-col mt-5 items-center ">
            <b className="p-3">Categories</b>
            <div
              style={{
                color: "#405454",
                fontSize: "30px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "22px",
                wordWrap: "break-word",
              }}
              className=" text-lg pb-20"
            >
              Find what you are looking for
            </div>
          </div>

          <div
            style={{
              height: "700px",
              borderBottomLeftRadius: "var(--br-x) var(--br-y)",
              "--br-x": "100px",
              "--br-y": "100px",
              borderBottomRightRadius: "100px",
            }}
          >
            <div
              className="relative bottom-72"
              style={{
                color: "#405454",
                fontSize: "28px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "22px",
                wordWrap: "break-word",
              }}
            >
              <div className="flex item-center ">
                <div className=" flex item-center gap-96">
                  <div
                    className="flex flex-col items-center"
                    style={{
                      filter: "drop-shadow(-10px 19px 10px #000000)",
                      bottom: "100px",
                      animation: "fly 5s linear infinite",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <img
                      className={`${styles.randomImage1} rounded-xl w-[252px] border h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300`}
                      alt=""
                      src={currentImages[0]}
                    />
                    <b className="pt-7">LUXURIOUS</b>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{
                      filter: "drop-shadow(10px 19px 10px #000000)",
                      bottom: "100px",
                      animation: "fly 5s linear infinite",
                      transition: "opacity 0.3s ease-in-out",
                      animationDelay: "100ms",
                    }}
                  >
                    <img
                      className={`${styles.randomImage1} rounded-xl border w-[252px] h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300`}
                      alt=""
                      src={currentImages[2]}
                    />
                    <b className="pt-7">REVOLUTIONARY</b>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center"
                style={{
                  filter: "drop-shadow(0px 19px 10px #000000)",
                  bottom: "300px",
                  animation: "fly 5s linear infinite",
                  transition: "opacity 0.3s ease-in-out",
                  animationDelay: "200ms",
                }}
              >
                <img
                  className={`${styles.randomImage} rounded-xl border border-gray-600 w-[252px] h-[412px] overflow-hidden object-cover transform hover:-translate-y-2 transition duration-300"`}
                  alt=""
                  src={currentImages[1]}
                />
                <b className="pt-7">EFFICIENT</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomImages
