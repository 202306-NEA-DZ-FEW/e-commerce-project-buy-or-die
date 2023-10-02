import { useState } from "react"
import { useRouter } from "next/router"

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null)
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    { name: "Electronics", subcategories: ["Smartphones", "Laptops"] },
    { name: "Beauty", subcategories: ["Fragrances", "Skincare"] },
    { name: "Groceries", subcategories: ["Groceries"] },
    { name: "Home", subcategories: ["Home-Decoration", "Furniture"] },
    {
      name: "Fashion",
      subcategories: [
        "Tops",
        "Womens-Dresses",
        "Womens-Shoes",
        "Mens-Shirts",
        "Mens-Shoes",
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        "Mens-Watches",
        "Womens-Watches",
        "Womens-Bags",
        "Womens-Jewellery",
        "Sunglasses",
      ],
    },
    { name: "Automotive", subcategories: ["Automotive", "Motorcycle"] },
    { name: "Lighting", subcategories: ["Lighting"] },
  ]

  const handleCategoryClick = (categoryName) => {
    setOpenCategory(categoryName === openCategory ? null : categoryName)
    handleCata(categoryName)
  }

  const handleCata = (category) => {
    router.push({
      pathname: router.pathname,
      query: { category },
    })
    setSelectedCategory(category)
  }

  return (
    <div className=" w-64 p-4">
      <h2 className="text-lg font-bold mb-5">Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryClick(category.name)}
              className="font-bold w-full text-left py-2 px-4 "
            >
              {category.name}
            </button>
            {category.name === openCategory && (
              <ul className="ml-4">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex}>
                    <button
                      onClick={() => handleCata(subcategory.toLowerCase())}
                      className="text-blue-500"
                    >
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
