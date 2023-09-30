import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import RightCard from "./Cards/RightHome"
import LeftCard from "./Cards/LeftHome"

const Carousels = () => {
  // State to store the products, loading state, and error state
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch the products data
    const fetchData = async () => {
      try {
        // Call the fetcher function to fetch the products from the API
        const data = await fetcher("products")

        // Set the products state with the fetched data
        setProducts(data.products)

        // Set the loading state to false to indicate that the data has been fetched
        setLoading(false)
      } catch (error) {
        // Set the error state if an error occurs during the fetch
        setError(error)

        // Set the loading state to false to indicate that the data fetching process is complete
        setLoading(false)
      }
    }

    // Call the fetchData function when the component mounts
    fetchData()
  }, [])

  const productPairs = []
  for (let i = 0; i < products.length; i += 2) {
    const pair = products.slice(i, i + 2)
    productPairs.push(pair)
  }

  return (
    <div className="flex justify-center pt-8 pb-40">
      {/* Display the carousel */}
      <Carousel className="w-1/2 self-center ">
        {/* Map over the product pairs and display each pair as a slide */}
        {productPairs.map((pair, index) => (
          <div
            key={index}
            className="flex flex-row flex-wrap pl-28 justify-center gap-2"
          >
            {/* Display the first product in the pair */}
            <LeftCard
              title={pair[0].title}
              thumbnail={pair[0].thumbnail}
              price={pair[0].price}
              rating={pair[0].rating}
              discountPercentage={pair[0].discountPercentage}
              description={pair[0].description}
              pid={pair[0].id}
            />

            {/* Check if there is a second product in the pair */}
            {pair[1] && (
              <RightCard
                title={pair[1].title}
                thumbnail={pair[1].thumbnail}
                price={pair[1].price}
                rating={pair[1].rating}
                discountPercentage={pair[1].discountPercentage}
                description={pair[1].description}
                pid={pair[1].id}
              />
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousels
