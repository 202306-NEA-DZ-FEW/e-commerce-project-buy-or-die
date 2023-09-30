import React from "react"
import Link from "next/link"

export default function LeftCard({
  pid,
  thumbnail,
  price,
  discountPercentage,
  title,
  rating,
  description,
}) {
  return (
    <div className="flex-auto flex-col z-50 transition duration-300 ease-in-out hover:scale-110">
      <Link href={`/products/${pid}`}>
        <div className="w-44 h-44 text-xs cursor-pointer flex flex-col rounded-s-xl bg-white md:max-w-xl md:flex-row">
          <div className="p-2 flex flex-col text-xs bg-white flex-grow rounded-e-xl">
            <h5 className="font-medium w-28 text-teal-500 border rounded-xl flex items-center justify-center">
              {title}
            </h5>
            <p className="text-neutral-600 h-20 overflow-y-hidden">
              {description}
            </p>
            <p className="rounded-full relative bg-red-600  text-center text-sm font-medium text-white origin-bottom -rotate-12 mt-2">
              {discountPercentage}%
            </p>
          </div>
          <img
            style={{
              filter: "drop-shadow(5px 39px 10px #000000)",

              animationDelay: "200ms",
              borderTopRightRadius: "var(--br-x) var(--br-y)",
              "--br-x": "100px",
              "--br-y": "200px",
              borderBottomRightRadius: "40px",
            }}
            className="w-full object-cover hover:scale-125 transition-transform duration-500"
            src={thumbnail}
            alt=""
          />
        </div>
      </Link>
    </div>
  )
}
