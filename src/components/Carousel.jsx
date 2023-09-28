import React, { useEffect, useState } from "react"
import { fetcher } from "@/Utils/API"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

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

  return (
    <div>
      {/* Display the carousel */}
      <Carousel>
        {/* Map over the products and display each product as a slide */}
        {products.map((product) => (
          <div key={product.id} className="p-4">
            {/* Display the product title */}
            <h3>{product.title}</h3>

            {/* Display the product thumbnail image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-48 h-32"
            />

            {/* Display the product description */}
            <p>{product.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousels
