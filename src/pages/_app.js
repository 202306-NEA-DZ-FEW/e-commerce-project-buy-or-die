import "tailwindcss/tailwind.css" // Import Tailwind CSS first
import "@/styles/globals.css" // Import your custom CSS file
import React from "react"
import Layout from "@/components/Layout"
import { store, persistor } from "@/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
