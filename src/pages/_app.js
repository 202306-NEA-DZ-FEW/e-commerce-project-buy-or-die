import "tailwindcss/tailwind.css" // Import Tailwind CSS first
import "@/styles/globals.css" // Import your custom CSS file
import React from "react"
import Layout from "@/components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
