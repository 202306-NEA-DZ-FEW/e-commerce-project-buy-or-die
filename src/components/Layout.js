// Layout.js or your specific page
import React from "react"
import NavBar from "@/components/Navbar/Navbar"
import BigSlider from "@/components/BigSlider" // Import the BigSlider component

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>
        {children}
        <BigSlider /> {/* Include the BigSlider component here */}
      </main>
    </div>
  )
}

export default Layout
