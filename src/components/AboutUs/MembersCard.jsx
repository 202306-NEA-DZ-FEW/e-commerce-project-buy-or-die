import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function MembersCard() {
  const posts = [
    {
      title: "TakiEddine Dilmi",
      img: "https://media.licdn.com/dms/image/D4D03AQERAzrnbwjq8w/profile-displayphoto-shrink_800_800/0/1693681934375?e=1701302400&v=beta&t=U7XyyRoAVDwFcKjftLHwmE51KuuFxXxwvmTaDBf3RV0",
      githubLink: "https://github.com/takidilmi",
      linkedinLink: "https://www.linkedin.com/in/takidilmi/",
      emailLink: "angeldilmi@gmail.com",
      content: "Front-end Web developer",
    },
    {
      title: "Walid Belharazem",
      img: "https://media.licdn.com/dms/image/D4D03AQG8mC0NMyT_ZQ/profile-displayphoto-shrink_400_400/0/1694126017760?e=1701302400&v=beta&t=qA54tdWehyU22L8T-1GiRcM6QKvbIKp85-F-j9aj8Ic",
      githubLink: "https://github.com/walidbelharazem",
      linkedinLink: "https://www.linkedin.com/in/walid-t-belharazem/",
      emailLink: "walidbelharazem@gmail.com ",
      content:
        "A front-end web developer passionate about crafting dynamic, user-friendly websites. Proficient in HTML, CSS, JavaScript, and React, with a focus on responsive and accessible designs.",
    },
    {
      title: "Mounia Belkheir",
      img: "https://media.licdn.com/dms/image/D5603AQFr-Tgy8kBXnA/profile-displayphoto-shrink_800_800/0/1695934815948?e=1701302400&v=beta&t=STSjdz8_S8DIgxYyh4gvcKCbivaj1V9nkXtswDKeo7s",
      githubLink: "https://github.com/MouniaBelkheir",
      linkedinLink: "https://www.linkedin.com/in/mounia-belkheir-5709011b9/",
      emailLink: "mouniabelkheir@outlook.com",
      content:
        "A front-end web developer very passionate about learning and working hard , and she believes that learning is an endless journey.",
    },
    {
      title: "Sidahmed Slikh",
      img: "https://media.licdn.com/dms/image/D4E03AQG1U2-fKHfQ8A/profile-displayphoto-shrink_800_800/0/1690553686343?e=1701302400&v=beta&t=b-47mFx2gkYHtQDfUGyXAvf0xCVmJg_mtGIA8vjureY",
      githubLink: "https://github.com/Zino0031",
      linkedinLink: "https://www.linkedin.com/in/sidahmed-zinedine/",
      emailLink: "sidahmedzinedine@gmail.com",
      content:
        "A web developer and graphic designer with a passion for creating visually stunning and functional websites. He has a strong foundation in HTML, CSS, JavaScript, and React. ",
    },
    {
      title: "Halla Hamidi",
      img: "https://avatars.githubusercontent.com/u/137820288?s=400&u=1839831813120faa6967e58669a751c5e16dc2f0&v=4",
      githubLink: "https://github.com/Halla24",
      linkedinLink: "https://www.linkedin.com/in/halla-hamidi-989197229/",
      emailLink: "aniabisso.16@gmail.com",
      content:
        "Frontend web developer passionate about digital experiences, by using in HTML, CSS, and JavaScript, Next JS and React to create different websites",
    },
    {
      title: "Hadil  Khenissa ",
      img: "https://media.licdn.com/dms/image/D4D03AQGmO0WpIfQUng/profile-displayphoto-shrink_800_800/0/1692212243586?e=1701302400&v=beta&t=nPaQh4ET1XEdD4zTfoCvfCT5QhIhvfB7Y_ZaSi8TOp4",
      githubLink: "https://github.com/hadilkhe",
      linkedinLink: "https://www.linkedin.com/in/hadil-khenissa/",
      emailLink: "hadil.khenissa2@gmail.com",
      content:
        "Hadil, a Front-end web developer and a professional leader with a strong background in Math, Coding and Content Creation. (HTML/CSS/JS/NEXT.JS/REACT.JS) ",
    },
  ]

  return (
    <div className="min-h-screen p-4">
      <style>
        {`
                .card {
                    background-color: #C1DCDC;
                    color: #003F62;
                    border-radius: 40px;
                }
                `}
      </style>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg shadow-md card" key={key}>
            <div className="h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items.img}
                alt="image"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold">{items.title}</h4>
              <p className="mb-2 leading-normal">{items.content}</p>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <a
                  href={items.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline flex items-center mb-2 sm:mb-0"
                >
                  <FaGithub size={20} className="mr-2" />
                  GitHub
                </a>
                <a
                  href={items.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline flex items-center mb-2 sm:mb-0"
                >
                  <FaLinkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${items.emailLink}`}
                  className="text-black hover:underline flex items-center"
                >
                  <FaEnvelope size={20} className="mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
