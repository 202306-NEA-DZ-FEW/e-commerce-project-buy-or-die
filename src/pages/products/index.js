import LeftSideBar from "@/components/Filter/LeftSideBar"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { fetcher } from "@/Utils/API"
import ProductCard from "@/components/Cards/ProductCard"
import Link from "next/link"

const Products = ({ produ }) => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [selectedfilter, setSelectedfilter] = useState(null)
  const router = useRouter()
  const { category } = router.query
  const filteredProducts = category
    ? produ.products.filter((prods) => prods.category === category)
    : produ.products

  const handleCategoryClick = (filter) => {
    router.push({
      pathname: router.pathname,
      query: { filter },
    })
    setSelectedfilter(filter)
  }

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  return (
    <>
      <LeftSideBar />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div class="col-span-2 md:col-span-1 lg:col-span-0 ">
          <div class="bg-gray-300 p-10 h-full ">Sidebar</div>
        </div>
        <div class="col-span-2 md:col-span-2 lg:col-span-3 ">
          <div className="container grid grid-cols-2 p-2 text-black rounded-full ">
            <div className="menu col-span-2 md:col-span-1 lg:col-span-1 ml-20 ">
              <div className="title">
                <p className="font-bold">
                  {category ? category.toUpperCase() : "All"}
                </p>
              </div>
            </div>
            <div className="filter col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex  items-center text-black justify-end space-x-2">
                <div className="mr-10">
                  Sort by :{" "}
                  <button className="font-bold" onClick={toggleFilterDrawer}>
                    {selectedfilter ? selectedfilter : "Filter"}
                  </button>
                </div>
                {isFilterDrawerOpen && (
                  <div className=" absolute mt-40  bg-white text-black z-20 ">
                    <div className="mb-4">
                      {" "}
                      <button onClick={() => handleCategoryClick("Title 1")}>
                        Title 1
                      </button>
                    </div>
                    <div className="mb-4">
                      {" "}
                      <button onClick={() => handleCategoryClick("Title 2")}>
                        Title 2
                      </button>
                    </div>
                    <div className="mb-4">
                      {" "}
                      <button onClick={() => handleCategoryClick("Title 3")}>
                        Title 3
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class=" p-1">
            <div class="col-span-2">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products

export async function getStaticProps() {
  const data = await fetcher("products?limit=0")
  return {
    props: {
      produ: data,
    },
  }
}
