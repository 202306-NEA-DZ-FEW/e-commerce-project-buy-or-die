import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button className="bg-blue-500 text-black px-4 py-2 mt-2 rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
