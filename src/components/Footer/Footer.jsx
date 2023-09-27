import React from "react"
import Logo from "../components/Logo"

const Footer = () => {
  return (
    <footer
      className="py-6"
      style={{ backgroundColor: "#C1DCDC", color: "#003F62" }}
    >
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center space-x-3 md:justify-start"
            >
              <Logo className="w-16 h-16 md:w-24 md:h-24" />
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">Products</p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Home decoration
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Electronics
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium">About Us</p>
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Our Project
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:dark:text-green-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2023 All rights reserved by Buy or Die team </span>
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
