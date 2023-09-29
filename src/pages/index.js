import React from "react"
import HomeCard from "@/components/Cards/HomeCards"
import Carousels from "@/components/Carousel"
import RandomImages from "@/components/Cards/RandomImg"

const HomePage = () => {
  return (
    <div>
      <HomeCard />
      <Carousels />

      <RandomImages />
    </div>
  )
}

export default HomePage
