import Link from "next/link"

export default function ProductItem({ data }) {
  return (
    <div>
      <img src={data.thumbnail} />

      <div>
        {" "}
        <h2>{data.title}</h2>
        <p>${data.price}</p>
      </div>
    </div>
  )
}
