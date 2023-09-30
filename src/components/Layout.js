import React from "react"
import NavBar from "@/components/Navbar/Navbar"
import Footer from "./Footer/Footer"
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
