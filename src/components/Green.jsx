import React from "react"
import Image from "next/image"

const Green = () => {
  return (
    <div>
      <div
        style={{ width: "104%" }}
        className="bg-[#405454] h-[80px] flex justify-evenly items-center p-2 "
      >
        <Image src="/Zara.svg" width={100} height={100} alt="ZARA" />
        <Image src="/Gucci.svg" width={100} height={100} alt="GUCCI" />
        <Image src="/Prada.svg" width={100} height={100} alt="PRADA" />
      </div>
    </div>
  )
}

export default Green
