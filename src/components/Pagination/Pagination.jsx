import React, { useState } from "react"

const Pagination = ({ totalProducts, productsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalProducts / productsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    onPageChange(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="list-style-none flex justify-center rounded-full  text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-red dark:hover:bg-neutral-700 dark:hover:text-white cursor-pointer ">
      <ul className="flex rounded-full px-3 py-1.5 text-sm text-black-600  cursor-pointer gap-x-7 ">
        {renderPageNumbers()}
      </ul>
    </div>
  )
}

export default Pagination
