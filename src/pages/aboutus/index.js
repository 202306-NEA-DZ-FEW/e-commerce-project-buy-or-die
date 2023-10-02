import React from "react"
import AboutCard from "@/components/AboutUs/AboutUs"
import MembersCard from "@/components/AboutUs/MembersCard"
import LoadingComponent from "@/components/LoadingComponent"

const AboutUs = () => {
  return (
    <LoadingComponent>
      <div>
        <AboutCard />
        <MembersCard />
      </div>
    </LoadingComponent>
  )
}

export default AboutUs
