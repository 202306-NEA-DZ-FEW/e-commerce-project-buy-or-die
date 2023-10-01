import React, { useState } from "react"
import Confetti from "react-dom-confetti"

const CheckoutForm = () => {
  const [isConfettiActive, setIsConfettiActive] = React.useState(false)
  const handleClick = () => {
    setIsConfettiActive(true)
    // Add your submit logic here
  }
  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#fca5a5", "#a5fca5", "#a5a5fc", "#fca5fc"],
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <label htmlFor="firstName" className="block mb-2">
        First Name:
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="lastName" className="block mb-2">
        Last Name:
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="email" className="max-w-md mx-auto">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="address" className="max-w-md mx-auto">
        Address:
      </label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Enter your address"
        value={formData.address}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="city" className="max-w-md mx-auto">
        City:
      </label>
      <input
        type="text"
        id="city"
        name="city"
        placeholder="Enter your city"
        value={formData.city}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="country" className="max-w-md mx-auto">
        Country:
      </label>
      <input
        type="text"
        id="country"
        name="country"
        placeholder="Enter your country"
        value={formData.country}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <label htmlFor="zipCode" className="max-w-md mx-auto">
        Zip Code:
      </label>
      <input
        type="text"
        id="zipCode"
        name="zipCode"
        placeholder="Enter your zip code"
        value={formData.zipCode}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
      />

      <div className="button-container">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          onClick={handleClick}
        >
          Submit
        </button>
        <Confetti active={isConfettiActive} config={confettiConfig} />
      </div>
    </form>
  )
}

export default CheckoutForm
