import React, { useState, useEffect, useRef } from "react"
import { fetcher } from "@/Utils/API"
import Link from "next/link"
import Image from "next/image"

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
    <div>
      <div
        ref={searchRef}
        className="flex items-center bg-white border border-gray-300 rounded-xl p-1 bg-opacity-50"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter search term"
          className="flex-grow outline-none px-2 bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-transparent text-white rounded-md ml-2"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
        >
          <Image
            src="/akar-icons_search.svg"
            alt="search"
            width={20}
            height={20}
          />
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
