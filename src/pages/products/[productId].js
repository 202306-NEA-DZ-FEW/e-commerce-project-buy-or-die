import { useState } from "react"

import ProductCard from "../../components/Cards/ProductCard"
import Link from "next/link"
import StarRating from "../../components/Cards/StarRating"
export default function Product({ data, data1, data2, data3, data4 }) {
  const [mainImage, setmainImage] = useState(0)
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "14px",
      }}
    >
      <div className="flex flex-row pt-8 justify-center items-center gap-2">
        <div
          style={{
            border: "double",
            borderRadius: "20px",
          }}
          className="flex gap-5 flex-col"
        >
          <img
            style={{
              width: "152px",
              height: "167px",
              borderRadius: "20px",
              border: "1px black solid",
              borderTopColor: "transparent",
            }}
            src={`${data.images[1]}`}
          />
          <img
            style={{
              width: "152px",
              height: "168px",
              border: "1px black solid",
              borderRadius: "20px",
            }}
            src={`${data.images[2]}`}
          />
          <img
            style={{
              width: "152px",
              height: "167px",
              border: "1px black solid",
              borderRadius: "20px",
            }}
            src={`${data.images[3]}`}
          />
        </div>
        <div className="flex gap-3">
          <div className="flex mt-5 flex-col items-center">
            <img
              style={{
                width: "444px",
                height: "530px",
                background: "linear-gradient(0deg, #F0EEED 0%, #F0EEED 100%)",
                border: "double",
                borderRadius: "20px",
              }}
              src={`${data.images[mainImage]}`}
            />
            <div
              className="flex"
              style={{
                gap: "16px",
              }}
            >
              <div className="flex space-x-6 justify-center items-center pt-2">
                {data.images.map((image, index) => (
                  <button key={index} onClick={() => setmainImage(index)}>
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div
            className="border pl-10 ml-10 pt-20"
            style={{
              border: "double",
              borderRadius: "20px",
              width: "900px",
            }}
          >
            <div
              style={{
                color: "black",
                fontSize: "40px",
                fontFamily: "Integral CF",
                fontWeight: 700,
                wordWrap: "break-word",
                paddingLeft: "20px",
              }}
            >
              {" "}
              {data.title}{" "}
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div
                  style={{
                    color: "black",
                    fontSize: "32px",
                    fontFamily: "Satoshi",
                    fontWeight: 700,
                    wordWrap: "break-word",
                  }}
                >
                  ${" "}
                  {Math.floor(
                    data.price - (data.price * data.discountPercentage) / 100,
                  )}
                </div>

                <div
                  style={{
                    color: "rgba(0, 0, 0, 0.30)",
                    fontSize: "20px",
                    fontFamily: "Satoshi",
                    fontWeight: 700,
                    textDecoration: "line-through",
                    wordWrap: "break-word",
                  }}
                >
                  ${data.price}
                </div>
                <div
                  style={{
                    color: "#FF3333",
                    fontSize: "16px",
                    fontFamily: "Satoshi",
                    fontWeight: 500,
                    wordWrap: "break-word",
                  }}
                >
                  -{data.discountPercentage}%
                </div>
              </div>
              <div className="flex items-center" style={{ gap: "16px" }}>
                <StarRating rating={data.rating} />
                <div>
                  <span
                    style={{
                      color: "black",
                      fontSize: "16px",
                      fontFamily: "Satoshi",
                    }}
                  >
                    {data.rating}/
                  </span>
                  <span
                    style={{
                      color: "rgba(0, 0, 0, 0.60)",
                      fontSize: "16px",
                      fontFamily: "Satoshi",
                    }}
                  >
                    5
                  </span>
                </div>
              </div>
              <div></div>
            </div>

            <div className="flex p-10">
              <div className="flex items-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  -
                </button>
                <input
                  type="number"
                  value="1"
                  className="border border-gray-300 px-2 py-1 rounded"
                  readOnly
                />
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  +
                </button>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded ml-auto">
                Add to Cart
              </button>
            </div>

            <div
              style={{
                paddingLeft: "40px",
                color: "rgba(0, 0, 0, 0.80)",
                fontSize: "28px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "22px",
                wordWrap: "break-word",
              }}
            >
              Product Details
            </div>
            <div
              style={{
                width: "590px",
                color: "rgba(0, 0, 0, 0.60)",
                paddingTop: "20px",
                paddingLeft: "20px",
                fontSize: "16px",
                fontFamily: "Satoshi",
                fontWeight: 400,
                lineHeight: "22px",
                wordWrap: "break-word",
              }}
            >
              {" "}
              {data.description}{" "}
            </div>
          </div>
        </div>
      </div>

      {/** Rcomended Items */}
      <div className="flex flex-col items-center mt-20">
        <div
          style={{
            paddingLeft: "0%",
            color: "black",
            fontSize: "40px",
            fontFamily: "Integral CF",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          You may like !
        </div>

        <div
          className="flex justify-evenly items-center"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            borderBottomColor: "transparent",
            border: "double",
            width: "90%",
            gap: "40px",
            paddingRight: "3%",
          }}
        >
          <Link href={`/products/${data1.id}`}>
            <ProductCard
              thumbnail={data1.thumbnail}
              price={data1.price}
              discountPercentage={data1.discountPercentage}
              title={data1.title}
              rating={data1.rating}
            />
          </Link>
          <Link href={`/products/${data2.id}`}>
            <ProductCard
              thumbnail={data2.thumbnail}
              price={data2.price}
              discountPercentage={data2.discountPercentage}
              title={data2.title}
              rating={data2.rating}
            />
          </Link>
          <Link href={`/products/${data3.id}`}>
            <ProductCard
              thumbnail={data3.thumbnail}
              price={data3.price}
              discountPercentage={data3.discountPercentage}
              title={data3.title}
              rating={data3.rating}
            />
          </Link>
          <Link href={`/products/${data4.id}`}>
            <ProductCard
              thumbnail={data4.thumbnail}
              price={data4.price}
              discountPercentage={data4.discountPercentage}
              title={data4.title}
              rating={data4.rating}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { productId } = context.query

  const new1 = parseInt(productId, 10) + 1
  const new2 = parseInt(productId, 10) + 2
  const new3 = parseInt(productId, 10) + 3
  const new4 = parseInt(productId, 10) + 4

  const response = await fetch(`https://dummyjson.com/products/${productId}`)
  const data = await response.json()

  const response1 = await fetch(`https://dummyjson.com/products/${new1}`)
  const data1 = await response1.json()

  const response2 = await fetch(`https://dummyjson.com/products/${new2}`)
  const data2 = await response2.json()

  const response3 = await fetch(`https://dummyjson.com/products/${new3}`)
  const data3 = await response3.json()

  const response4 = await fetch(`https://dummyjson.com/products/${new4}`)
  const data4 = await response4.json()

  return { props: { data, data1, data2, data3, data4 } }
}
