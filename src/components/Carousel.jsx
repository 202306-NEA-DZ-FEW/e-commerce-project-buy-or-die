import React from "react"
import fetch from "node-fetch"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carousels = ({ products }) => {
  // Check if 'products' is an array before rendering
  if (!Array.isArray(products)) {
    return <div>No products available.</div>
  }

  return (
    <div>
      <h1>FIND CLOTHES THAT MATCH YOURS</h1>
      <Carousel>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.name} />
            <p>{product.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    return {
      props: {
        products: data.products,
      },
    }
  } catch (error) {
    console.error("Error fetching product data:", error)
    return {
      props: {
        products: [],
      },
    }
  }
}

export default Carousels
