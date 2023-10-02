import React, { useState } from "react"

const SizeList = () => {
  const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"]
  const [selectedSize, setSelectedSize] = useState(null)

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }

  return (
    <div className="w-64 p-4">
      <div>
        <h2 className="text-lg font-semibold">Sizes</h2>
      </div>
      <div className="flex flex-wrap">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`cursor-pointer px-2 py-1 mr-2 mb-2 text-center ${
              selectedSize === size ? "bg-[#405454] text-white" : "bg-gray-200"
            } border border-gray-300 rounded-full`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SizeList
