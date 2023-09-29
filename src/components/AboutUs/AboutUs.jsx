import React from "react"

export default function AboutCard() {
  const cardStyle = {
    backgroundColor: "#C1DCDC",
    color: "#003F62",
  }

  const imageStyle = {
    marginLeft: "60px",
    marginRight: "100px",
    marginTop: "-48px",
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="relative flex flex-col rounded-xl text-custom-text-color shadow-lg md:max-w-4x1 md:flex-row"
        style={cardStyle}
      >
        <img
          className="h-96 w-full md:h-auto md:w-60 md:rounded-none md:rounded-4-xl"
          src="https://media.discordapp.net/attachments/1133546889762054286/1157110671348084807/Screenshot_2023-09-27_201647.png?ex=65176aca&is=6516194a&hm=779fe20949ce921b945df106719905b59bf197135b88131a0e9294c61ebf144c&=&width=342&height=556"
          alt=""
          style={imageStyle}
        />
        <div className="flex flex-col p-4 md:p-16">
          <h5 className="mb-2 text-xl font-medium text-custom-text-color">
            About SOUGNA
          </h5>
          <p className="mb-4 text-base text-custom-text-color md:text-lg lg:text-xl">
            This website is a testament to the unwavering passion and hard work
            of the Buy or Die team, re:coded students who have poured their
            hearts into creating the best place for online shopping. Their
            dedication shines through, making this project a shining example of
            commitment and excellence in the e-commerce realm. Shop here with
            confidence , we worked so hard to make your shopping the best .
          </p>
          <p className="text-xs text-custom-text-color">
            Made with love and so much hard work
          </p>
        </div>
      </div>
    </div>
  )
}
