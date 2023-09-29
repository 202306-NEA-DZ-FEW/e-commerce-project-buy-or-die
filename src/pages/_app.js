import "tailwindcss/tailwind.css" // Import Tailwind CSS first
import "@/styles/globals.css" // Import your custom CSS file
import React from "react"
import Layout from "@/components/Layout"
import { store } from "@/redux/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
