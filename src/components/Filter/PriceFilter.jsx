import React from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const PriceFilter = ({ min, max, range = [min, max], onRangeChange }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Price</h2>
      <div className="flex flex-col space-y-4">
        <div className="font-bold flex items-center justify-between">
          <span>Min : ${range[0]}</span>
          <span>Max : ${range[1]}</span>
        </div>
        <Slider
          range
          min={min}
          max={max}
          defaultValue={range}
          onChange={onRangeChange}
        />
      </div>
    </div>
  )
}

export default PriceFilter
