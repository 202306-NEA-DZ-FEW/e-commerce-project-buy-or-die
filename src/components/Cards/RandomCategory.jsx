import React, { useEffect, useState } from "react"

const RandomCategories = () => {
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")

  useEffect(() => {
    // Fetch categories
    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories")
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    // Generate a random category every 2 seconds
    const interval = setInterval(() => {
      setCurrentCategory(getRandomCategory())
    }, 2000)

    return () => clearInterval(interval)
  }, [categories])

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length)
    return categories[randomIndex]
  }

  return (
    <div className="flex justify-center items-center pt-8">
      <p
        className=""
        style={{
          color: "#405454",
          fontSize: "40px",
          fontFamily: "Satoshi",
          fontWeight: 400,
          lineHeight: "30px",
          wordWrap: "break-word",
        }}
      >
        {currentCategory}
      </p>
    </div>
  )
}

export default RandomCategories
