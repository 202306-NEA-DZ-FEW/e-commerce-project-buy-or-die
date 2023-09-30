import React from "react"

export const FormatePrice = ({ amount }) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  })
  return <span>{formattedAmount}</span>
}
