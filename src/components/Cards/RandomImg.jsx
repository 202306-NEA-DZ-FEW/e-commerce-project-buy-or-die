import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"

const RandomImages = () => {
  const [imageUrls, setImageUrls] = useState([])
  const [currentImages, setCurrentImages] = useState([null, null, null])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchImages = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching images:", error)
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
    <div className="absolute top-[1728px] left-[144px] bg-whitesmoke w-[1440px] h-[1024px] overflow-hidden text-13xl">
      <div className="absolute top-[8px] left-[589px] flex flex-col items-center justify-start gap-[12px]">
        <b className="relative">Categories</b>
        <div className="relative text-lg font-medium text-color-21">
          Find what you are looking for
        </div>
      </div>
      <div className="absolute top-[191px] left-[0px] bg-color-1 w-[1440px] h-[841px] text-lg text-color-2">
        <div className="absolute top-[-48px] left-[96px] flex flex-col items-center justify-start gap-[12px]">
          <img
            className="relative rounded-xl w-[352px] h-[512px] overflow-hidden shrink-0 object-cover"
            alt=""
            src={currentImages[0]}
          />
          <b className="relative">text</b>
        </div>
        <div className="absolute top-[-48px] left-[992px] flex flex-col items-center justify-start gap-[12px]">
          <img
            className="relative rounded-xl w-[352px] h-[512px] overflow-hidden shrink-0 object-cover"
            alt=""
            src={currentImages[1]}
          />
          <b className="relative">text</b>
        </div>
        <div className="absolute top-[48px] left-[544px] flex flex-col items-center justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <img
                className="relative rounded-xl w-[352px] h-[512px] overflow-hidden shrink-0 object-cover"
                alt=""
                src={currentImages[2]}
              />
              <b className="relative">text</b>
            </div>
            <div className="relative font-medium text-color-21 text-center inline-block w-[352px]">
              text
            </div>
          </div>
          <div className="rounded-lg bg-white flex flex-row items-center justify-start py-3 px-6 gap-[10px] text-center">
            <div className="relative font-medium">Explore</div>
            <img
              className="relative w-6 h-5 overflow-hidden shrink-0"
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomImages
