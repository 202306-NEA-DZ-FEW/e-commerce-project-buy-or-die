import React, { useEffect, useState } from "react"
import CartPage from "@/components/CartComponent/CartPage"
import LoadingComponent from "@/components/LoadingComponent"

function cart() {
  return (
    <LoadingComponent>
      <div>
        <CartPage />
      </div>
    </LoadingComponent>
  )
}

export default cart
