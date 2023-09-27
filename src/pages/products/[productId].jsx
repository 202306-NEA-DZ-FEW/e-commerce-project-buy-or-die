import { useState } from "react"
export default function Product({ data }) {
  const [mainImage, setmainImage] = useState(0)
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div>
        {" "}
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
        <div className="flex space-x-2 justify-center items-center rounded-full p-2">
          {data.images.map((image, index) => (
            <button key={index} onClick={() => setmainImage(index)}>
              {index + 1}
            </button>
          ))}
        </div>{" "}
      </div>

      <div
        style={{
          width: "400px",
          height: "52px",
          paddingLeft: "54px",
          paddingRight: "54px",
          paddingTop: "16px",
          paddingBottom: "16px",
          left: "976px",
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
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Add to Cart
        </div>
      </div>
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
        <div
          style={{
            width: "24px",
            height: "24px",
            position: "relative",
          }}
        >
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
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          1
        </div>
        <div
          style={{
            width: "24px",
            height: "24px",
            position: "relative",
          }}
        >
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
      <div
        style={{
          width: "590px",
          left: "828px",
          top: "486px",
          position: "absolute",
          color: "rgba(0, 0, 0, 0.60)",
          fontSize: "16px",
          fontFamily: "Satoshi",
          fontWeight: "400",
          lineHeight: "22px",
          wordWrap: "break-word",
        }}
      >
        {data.description}
      </div>

      <div
        style={{
          left: "819px",
          top: "93px",
          position: "absolute",
          color: "black",
          fontSize: "40px",
          fontFamily: "Integral CF",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        {data.title}
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
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          $
          {Math.floor(
            data.price - (data.price * data.discountPercentage) / 100,
          )}
        </div>
        <div
          style={{
            color: "rgba(0, 0, 0, 0.30)",
            fontSize: "32px",
            fontFamily: "Satoshi",
            fontWeight: "700",
            textDecoration: "line-through",
            wordWrap: "break-word",
          }}
        >
          ${data.price}
        </div>
      </div>

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
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "7.10px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "11.75px",
              height: "22.35px",
              background: "#FFC633",
            }}
          ></div>
        </div>
        <div>
          <span
            style={{
              color: "black",
              fontSize: "16px",
              fontFamily: "Satoshi",
              fontWeight: "400",
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
              fontWeight: "400",
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
            fontWeight: "500",
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
          fontWeight: "400",
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

export async function getServerSideProps({ params }) {
  const { id } = params
  const response = await fetch(`https://dummyjson.com/products/6`)
  const data = await response.json()
  return { props: { data } }
}
