import { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import HomeCard from "./HomeCards"

const RandomImages = () => {
  const [imageUrls, setImageUrls] = useState([])

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

  return <div>{imageUrls.length > 0 && <HomeCard {...{ imageUrls }} />}</div>
}

export default RandomImages
