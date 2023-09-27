import React, { useState, useEffect } from "react"
import ProductCard from "@/components/Cards/ProductCard"
import { fetcher } from "@/Utils/API"

import HomeCard from "@/components/Cards/HomeCards"

export default function Example() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher("products")
      setData(data)
    }
    console.log(data)

    fetchData()
  }, [])
  return (
    <main className="">
      <HomeCard />

      <ProductCard
        rating={data?.products[0].rating}
        price={data?.products[0].price}
        title={data?.products[0].title}
        discountPercentage={data?.products[0].discountPercentage}
        thumbnail={data?.products[0].thumbnail}
      />
    </main>
  )
}
