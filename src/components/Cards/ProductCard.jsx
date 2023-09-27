import React, { useEffect, useState } from "react"

import StarRating from "./StarRating"

const ProductCard = ({
  thumbnail,
  price,
  discountPercentage,
  title,
  rating,
}) => {
  return (
    <div className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110">
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="hover:scale-125 transition-transform duration-500"
            src={thumbnail}
            alt="Product Thumbnail"
          />
          <span className="absolute top-0 left-0 m-1 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white origin-bottom -rotate-12">
            {discountPercentage}%
          </span>
        </div>
        <div className="mt-4 px-5 pb-5">
          <div>
            <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
          </div>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${price}
              </span>
              <span className="text-sm text-red-600 line-through">
                ${(price / (1 - discountPercentage / 100)).toFixed(2)}
              </span>
            </p>
            <div className="flex items-center">
              <StarRating rating={rating} />
              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
