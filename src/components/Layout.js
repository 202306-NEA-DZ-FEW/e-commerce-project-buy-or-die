import React from "react"
import NavBar from "@/components/Navbar/Navbar"
import Footer from "./Footer/Footer"
import LeftSideBar from "@/components/Filter/LeftSideBar"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <LeftSideBar />
      <Footer />
    </div>
  )
}

export default Layout
