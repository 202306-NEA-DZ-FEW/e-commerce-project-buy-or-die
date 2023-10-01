import LeftSideBar from "@/components/Filter/LeftSideBar"
import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { fetcher } from "@/Utils/API"
import ProductCard from "@/components/Cards/ProductCard"
import Sidebar from "@/components/Filter/SideBar"
import PriceFilter from "@/components/Filter/PriceFilter"
import Pagination from "@/components/Pagination/Pagination"
import ColorList from "@/components/Filter/Color"

const Products = ({ produ }) => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [selectedFilterType, setSelectedFilterType] = useState(null)
  const router = useRouter()
  const { category, filter } = router.query
  const filterDrawerRef = useRef(null)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 10
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleCategoryClick = (filterType) => {
    let updatedQuery = { pathname: router.pathname }

    if (
      filterType === "Name" ||
      filterType === "Price" ||
      filterType === "Rating"
    ) {
      updatedQuery.query = { ...router.query, filter: filterType }
    } else {
      updatedQuery.query = { ...router.query, filter: null }
    }

    router.push(updatedQuery)
    setSelectedFilterType(filterType)
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  useEffect(() => {
    setSelectedFilter(filter)
  }, [filter])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterDrawerRef.current &&
        !filterDrawerRef.current.contains(event.target)
      ) {
        setIsFilterDrawerOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filterProducts = () => {
    if (selectedFilterType === "Name") {
      return produ.products
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title))
    } else if (selectedFilterType === "Price") {
      return produ.products.slice().sort((a, b) => a.price - b.price)
    } else if (selectedFilterType === "Rating") {
      return produ.products.slice().sort((a, b) => b.rating - a.rating)
    } else {
      return produ.products
    }
  }

  let filteredProducts = produ.products.slice()

  if (filter) {
    filteredProducts = filterProducts()
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (prods) => prods.category === category,
    )

    if (category === "Fashion") {
      const subcategories = [
        "mens-shoes",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
      ]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Accessories") {
      const subcategories = [
        "mens-watches",
        "womens-watches",
        "womens-bags",
        " womens-jewellery",
        "sunglasses",
      ]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Electronics") {
      const subcategories = ["smartphones", "Laptops"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Beauty") {
      const subcategories = ["fragrances", "skincare"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Home") {
      const subcategories = ["home-decoration", "Furniture"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Automotive") {
      const subcategories = ["automotive", "motorcycle"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Groceries") {
      const subcategories = ["groceries"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }
    if (category === "Lighting") {
      const subcategories = ["lighting"]
      filteredProducts = produ.products.filter((prods) =>
        subcategories.includes(prods.category),
      )
    }

    if (selectedFilterType) {
      filteredProducts = filteredProducts.slice().sort((a, b) => {
        if (selectedFilterType === "Name") {
          return a.title.localeCompare(b.title)
        } else if (selectedFilterType === "Price") {
          return a.price - b.price
        } else if (selectedFilterType === "Rating") {
          return b.rating - a.rating
        }
        return 0
      })
    }
  }

  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1],
  )

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
  }

  const handleRangeChange = (newRange) => {
    setPriceRange(newRange)
  }
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const displayedProducts = filteredProducts.slice(startIndex, endIndex)

  const Fashion = [
    "mens-shoes",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
  ]

  return (
    <>
      <LeftSideBar />

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div class="">
          <div class="bg-gray-300 p-10 h-full lg:flex flex-col hidden ">
            Sidebar
            <Sidebar />
            <div className="flex">
              <PriceFilter
                min={0}
                max={1000}
                range={priceRange}
                onRangeChange={handleRangeChange}
              />
            </div>
            {category === "Fashion" || Fashion.includes(category) ? (
              <ColorList className="bg-gray-300 p-10 h-full" />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div class="col-span-2 md:col-span-2 lg:col-span-3 mt-10 ">
          <div className="container grid grid-cols-2 p-2 text-black rounded-full ">
            <div className="menu col-span-2 md:col-span-1 lg:col-span-1 ml-20 ">
              <div className="title">
                <p className="font-bold">
                  {category ? category.toUpperCase() : "All"}
                </p>
              </div>
            </div>
            <div className="filter col-span-2 md:col-span-1 lg:col-span-1 ">
              <div className="flex  items-center text-black justify-end space-x-2">
                <div className="">
                  Sort by :{" "}
                  <button className="font-bold" onClick={toggleFilterDrawer}>
                    {selectedFilter ? selectedFilter : "Filter"}
                  </button>
                </div>
                {isFilterDrawerOpen && (
                  <div
                    className="absolute mt-36 bg-white text-black z-20"
                    ref={filterDrawerRef}
                  >
                    <div className="mb-4 ">
                      <button onClick={() => handleCategoryClick("All")}>
                        All
                      </button>
                    </div>
                    <div className="mb-4 ">
                      <button onClick={() => handleCategoryClick("Name")}>
                        Name
                      </button>
                    </div>
                    <div className="mb-4">
                      <button onClick={() => handleCategoryClick("Price")}>
                        Price
                      </button>
                    </div>
                    <div className="mb-4">
                      <button onClick={() => handleCategoryClick("Rating")}>
                        Rating
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
                <div className="grid 2xl:grid-cols-5 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-4 justify-center items-center">
                  {displayedProducts.map((prods) => {
                    return (
                      <div key={prods.id}>
                        <ProductCard {...prods} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <Pagination
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            onPageChange={handlePageChange}
          />
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
