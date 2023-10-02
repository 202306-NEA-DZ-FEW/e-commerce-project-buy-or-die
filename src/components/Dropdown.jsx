import React, { useState, useEffect, useRef } from "react"
import { signOut } from "firebase/auth"
import { auth } from "@/Utils/firebase"
import Link from "next/link"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [user, setUser] = useState(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleSingOut = async () => {
    await signOut(auth)
  }

  useEffect(() => {
    const logged = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return () => {
      logged()
    }
  }, [])

  return (
    <div
      className="relative "
      onMouseEnter={handleMouseEnter}
      ref={dropdownRef}
    >
      <div className="px-4 font-bold hover:text-blue-500 hover:underline text-black bg-transparent">
        {user ? user.displayName : "Account"}
      </div>

      {isOpen && (
        <div
          style={{ width: "120%" }}
          className="absolute cursor-pointer right-0 mt-2 mr-4 bg-white rounded-md shadow-lg overflow-hidden"
        >
          <ul className="py-2 h-full ">
            {user ? (
              <button
                onClick={handleSingOut}
                className="px-2 py-2 border border-t-transparent border-r-transparent border-l-transparent hover:bg-gray-100"
              >
                SignOut
              </button>
            ) : (
              <button className="px-2 py-2 border border-t-transparent border-r-transparent border-l-transparent hover:bg-gray-100">
                <Link href="/login">SignIn/SignUp</Link>
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown

// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className=""
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button className="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none">
//         Account
//         <svg
//           className={`w-4 h-4 ml-2 transition-transform ${
//             isOpen ? 'rotate-180' : ''
//           }`}
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>

//       {isOpen && (
//         <div
//         style={{zIndex:'100'}}
//         className="absolute mt-2 bg-white rounded-md shadow-lg">
//           <ul className="py-2">
//             <li className="px-4 py-2 hover:bg-gray-100">Welcome to Aliexpress</li>
//             <li className="flex justify-between px-4 py-2 hover:bg-gray-100">
//               <button className="text-blue-500">Sign In</button>
//               <button className="text-blue-500">Register</button>
//             </li>
//             <li className="px-4 py-2 hover:bg-gray-100">My Orders</li>
//             <li className="px-4 py-2 hover:bg-gray-100">My Coins</li>
//             <li className="px-4 py-2 hover:bg-gray-100">Message Center</li>
//             <li className="px-4 py-2 hover:bg-gray-100">Payment</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
