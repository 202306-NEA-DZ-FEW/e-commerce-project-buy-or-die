import React from "react"
import { useRouter } from "next/router"

const ProductDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Product Details for Product ID: {id}</h1>
      {/* Display product details */}
    </div>
  )
}

export default ProductDetailPage
