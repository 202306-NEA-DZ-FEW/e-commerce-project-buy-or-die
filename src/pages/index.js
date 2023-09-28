import React, { useState } from "react"
import Image from "next/image"

const ColorList = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
  ]
  const [isListVisible, setListVisible] = useState(false)

  const toggleList = () => {
    setListVisible(!isListVisible)
  }

  return (
    <div>
      <div className="flex">
        <div className="flex flex-row-reverse gap-11">
          <Image
            onClick={toggleList}
            style={{ cursor: "pointer" }}
            src={`/Dropdown.png`}
            alt="Drop"
            height={"20"}
            width={"20"}
          />
          <h1 onClick={toggleList} style={{ cursor: "pointer" }}>
            Colors
          </h1>
        </div>
      </div>
      {isListVisible && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            {colors.slice(0, 5).map((color, index) => (
              <div
                className="cursor-pointer"
                key={index}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  margin: "5px",
                }}
              />
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {colors.slice(5, 10).map((color, index) => (
              <div
                className="cursor-pointer"
                key={index}
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  margin: "5px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorList
