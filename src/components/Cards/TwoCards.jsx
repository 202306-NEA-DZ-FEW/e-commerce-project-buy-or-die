import React from "react"

export default function TwoCards({
  thumbnail,
  price,
  discountPercentage,
  title,
  rating,
  description,
}) {
  return (
    <div className="flex-auto flex-col z-50 transition duration-300 ease-in-out hover:scale-110 ">
      <div className="w-44 h-44 text-xs cursor-pointer flex flex-col rounded-s-xl bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
        <img
          className="w-full object-cover z-10 shadow-xl rounded-3xl p-3 hover:scale-125 transition-transform duration-500"
          src={thumbnail}
          alt=""
        />
        <div className="p-2  flex flex-col text-xs bg-white flex-grow rounded-e-xl ">
          <h5 className="font-medium  w-28 text-teal-500 border rounded-xl flex items-center justify-center">
            {title}
          </h5>
          <p className="text-neutral-600 h-20 overflow-y-hidden ">
            {description}
          </p>
          <p className="rounded-full relative bg-red-600 px-2 text-center text-sm font-medium text-white origin-bottom -rotate-12 mt-2">
            {discountPercentage}%
          </p>
        </div>
      </div>
    </div>
  )
}
