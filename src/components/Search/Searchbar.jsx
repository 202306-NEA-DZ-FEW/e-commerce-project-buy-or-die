import React, { useState, useEffect, useRef } from "react"
import { fetcher } from "@/Utils/API"
import Link from "next/link"

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const searchRef = useRef(null)

  const handleSearch = async () => {
    const data = await fetcher(`products/search?q=${searchTerm}`)
    setSearchResults(data.products)
  }

  const handleKeyDown = ({ key }) => {
    if (key === "Enter") {
      handleSearch()
    } else if (key === "Escape") {
      setSearchResults([])
    }
  }

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchResults([])
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div ref={searchRef}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter search term"
          className="border border-gray-300 rounded-l-md py-2 px-4  flex-grow"
        />
        <button
          onClick={handleSearch}
          className="text-white hover:bg-red-600 font-semibold py-2 px-4 rounded-r-md"
          style={{
            backgroundColor: "rgba(193, 220, 220, 1)",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "rgba(64, 84, 84, 1)")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "rgba(193, 220, 220, 1)")
          }
        >
          Search
        </button>
      </div>
      <ul className="flex pr-7 justify-center">
        {searchResults.length > 0 && (
          <div
            className="absolute z-50 h-60 overflow-y-scroll flex flex-col bg-opacity-75 p-2 bg-white rounded-xl"
            ref={searchRef}
          >
            {searchResults.map((product) => (
              <Link href={`./products/${product.id}`} key={product.id}>
                {product.title}
              </Link>
            ))}
          </div>
        )}
      </ul>
    </div>
  )
}

export default SearchComponent
