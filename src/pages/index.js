import React from "react"
import HomeCard from "@/components/Cards/HomeCards"
import Carousels from "@/components/Carousel"
import RandomImages from "@/components/Cards/RandomImg"
import Green from "@/components/Green"
import RandomCategories from "@/components/Cards/RandomCategory"

const HomePage = () => {
  return (
    <div>
      <HomeCard />
      <Green />
      <RandomCategories />
      <Carousels />
      <RandomImages />
    </div>
  )
}

export default HomePage
