import LeftSideBar from "@/components/Filter/LeftSideBar"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { fetcher } from "@/Utils/API"
import ProductCard from "@/components/Cards/ProductCard"
import Link from "next/link"

const Products = ({ produ }) => {
  const router = useRouter()
  const { category } = router.query
  const filteredProducts = category
    ? produ.products.filter((prods) => prods.category === category)
    : produ.products

  return (
    <>
      <LeftSideBar />
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center">
          {filteredProducts.map((prods) => {
            return (
              <div key={prods.id}>
                <Link href={`/products/${prods.id}`}>
                  <ProductCard {...prods} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products

export async function getStaticProps() {
  const data = await fetcher("products")
  return {
    props: {
      produ: data,
    },
  }
}
