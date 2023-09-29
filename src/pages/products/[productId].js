import { useState } from "react"

import ProductCard from "../../components/Cards/ProductCard"
import Link from "next/link"
import StarRating from "../../components/Cards/StarRating"
export default function Product({ data, data1, data2, data3, data4 }) {
  const [mainImage, setmainImage] = useState(0)
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        style={{
          width: "444px",
          height: "530px",
          left: "277px",
          top: "36px",
          position: "absolute",
          background: "linear-gradient(0deg, #F0EEED 0%, #F0EEED 100%)",
          borderRadius: "20px",
        }}
        src={`${data.images[mainImage]}`}
      />
      <img
        style={{
          width: "152px",
          height: "167px",
          left: "64px",
          top: "36px",
          position: "absolute",
          borderRadius: "20px",
          border: "1px black solid",
        }}
        src={`${data.images[1]}`}
      />
      <img
        style={{
          width: "152px",
          height: "168px",
          left: "64px",
          top: "217px",
          position: "absolute",
          borderRadius: "20px",
        }}
        src={`${data.images[2]}`}
      />
      <img
        style={{
          width: "152px",
          height: "167px",
          left: "64px",
          top: "399px",
          position: "absolute",
          borderRadius: "20px",
        }}
        src={`${data.images[3]}`}
      />

      {/** Rcomended Items */}
      <div
        style={{
          left: "64px",
          right: "64px",
          top: "713px",
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "12px",
          display: "inline-flex",
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

      {/** BUY NOW ! */}

      <div
        style={{
          width: "400px",
          height: "52px",
          paddingLeft: "54px",
          paddingRight: "54px",
          paddingTop: "16px",
          paddingBottom: "16px",

          left: "1050px",

          top: "301px",
          position: "absolute",
          background: "black",
          borderRadius: "62px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Satoshi",

            fontWeight: 500,

            wordWrap: "break-word",
          }}
        >
          Add to Cart
        </div>
      </div>

      {/** N° of items */}

      <div
        style={{
          width: "170px",
          height: "52px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "16px",
          paddingBottom: "16px",
          left: "862px",
          top: "301px",
          position: "absolute",
          background: "#F0F0F0",
          borderRadius: "62px",
          overflow: "hidden",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >

        <div style={{ width: "24px", height: "24px", position: "relative" }}>

          <div
            style={{
              width: "18.75px",
              height: "2.25px",
              left: "2.62px",
              top: "10.88px",
              position: "absolute",
              background: "black",
            }}
          ></div>
        </div>
        <div
          style={{
            color: "black",
            fontSize: "16px",
            fontFamily: "Satoshi",

            fontWeight: 500,

            wordWrap: "break-word",
          }}
        >
          1
        </div>

        <div style={{ width: "24px", height: "24px", position: "relative" }}>

          <div
            style={{
              width: "18.75px",
              height: "18.75px",
              left: "2.62px",
              top: "2.62px",
              position: "absolute",
              background: "black",
            }}
          ></div>
        </div>
      </div>


      {/** description , you may like ! */}
      {/*<div style={{ left: '292px', top: '582px', position: 'absolute', color: 'rgba(0, 0, 0, 0.60)', fontSize: '16px', fontFamily: 'Satoshi', fontWeight: 400, wordWrap: 'break-word' }}>Select Colors</div>*/}

      <div
        style={{
          width: "590px",
          left: "828px",
          top: "486px",
          position: "absolute",
          color: "rgba(0, 0, 0, 0.60)",
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
      <div
        style={{
          left: "600px",
          top: "678px",
          position: "absolute",
          color: "black",
          fontSize: "40px",
          fontFamily: "Integral CF",
          fontWeight: 700,
          wordWrap: "break-word",
        }}
      >
        You may like !
      </div>

      {/** line  */}
      {/**<div style={{ width: '590px', height: '0px', left: '292px', top: '483px', position: 'absolute', border: '1px rgba(0, 0, 0, 0.10) solid' }}></div>
       */}
      {/** 3circle colors ! */}
      <div
        style={{
          left: "292px",
          top: "570px",
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "16px",
          display: "inline-flex",
        }}
      >
        <div className="flex space-x-2 justify-center items-center rounded-full p-2">
          {data.images.map((image, index) => (
            <button key={index} onClick={() => setmainImage(index)}>
              {index + 1}
            </button>
          ))}
        </div>
        {/*<div style={{ width: '37px', height: '37px', position: 'relative' }}>
      <div style={{ width: '37px', height: '37px', left: '0px', top: '0px', position: 'absolute', background: '#4F4631', borderRadius: '9999px' }}></div>
      <div style={{ width: '16px', height: '16px', left: '10px', top: '10px', position: 'absolute' }}>
        <div style={{ width: '13px', height: '9.50px', left: '1.75px', top: '3.75px', position: 'absolute', background: 'white' }}></div>
      </div>
    </div>
    <div style={{ width: '37px', height: '37px', background: '#314F4A', borderRadius: '9999px' }}></div>
    <div style={{ width: '37px', height: '37px', background: '#31344F', borderRadius: '9999px' }}></div>*/}
      </div>

      {/* price + title */}

      <div
        style={{
          left: "819px",
          top: "93px",
          position: "absolute",
          color: "black",
          fontSize: "40px",
          fontFamily: "Integral CF",

          fontWeight: 700,
          wordWrap: "break-word",
        }}
      >
        {" "}
        {data.title}{" "}

      </div>
      <div
        style={{
          left: "826px",
          top: "182px",
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "12px",
          display: "inline-flex",
        }}
      >
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
            fontSize: "32px",
            fontFamily: "Satoshi",

            fontWeight: 700,

            textDecoration: "line-through",
            wordWrap: "break-word",
          }}
        >
          ${data.price}
        </div>
      </div>


      {/* stars + dicount + title : product details */}

      <div
        style={{
          left: "1239px",
          top: "193px",
          position: "absolute",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
          display: "inline-flex",
        }}
      >

        {/* <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '7.10px', display: 'flex' }}>
      <div style={{ width: '11.75px', height: '22.35px', background: '#FFC633' }}></div>
    </div> */}

        <StarRating rating={data.rating} />
        <div>
          <span
            style={{
              color: "black",
              fontSize: "16px",
              fontFamily: "Satoshi",

              fontWeight: 400,

              wordWrap: "break-word",
            }}
          >
            {data.rating}/
          </span>
          <span
            style={{
              color: "rgba(0, 0, 0, 0.60)",
              fontSize: "16px",
              fontFamily: "Satoshi",

              fontWeight: 400,

              wordWrap: "break-word",
            }}
          >
            5
          </span>
        </div>
      </div>


      <div
        style={{
          paddingLeft: "14px",
          paddingRight: "14px",
          paddingTop: "6px",
          paddingBottom: "6px",
          left: "1008px",
          top: "186px",
          position: "absolute",
          background: "rgba(255, 51, 51, 0.10)",
          borderRadius: "62px",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          display: "inline-flex",
        }}
      >
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


      <div
        style={{
          left: "831px",
          top: "432px",
          position: "absolute",
          color: "rgba(0, 0, 0, 0.60)",
          fontSize: "20px",
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
          width: "100px",
          height: "100px",
          left: "395px",
          top: "215px",
          position: "absolute",
        }}
      ></div>
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
