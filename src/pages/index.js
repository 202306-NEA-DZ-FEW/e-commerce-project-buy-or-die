import React from "react"
import HomeCard from "@/components/Cards/HomeCards"
import Carousels from "@/components/Carousel"
import RandomImages from "@/components/Cards/RandomImg"
import Green from "@/components/Green"
import RandomCategories from "@/components/Cards/RandomCategory"
import LoadingComponent from "@/components/LoadingComponent"

const HomePage = () => {
  return (
    <div>
      <LoadingComponent>
        <HomeCard />
        <Green />
        <RandomCategories />
        <Carousels />
        <RandomImages />
      </LoadingComponent>
    </div>
  )
}

export default HomePage
