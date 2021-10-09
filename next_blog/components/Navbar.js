/* eslint-disable prefer-template */
import React, { useState } from 'react'
import Link from 'next/link'
import Moon from '../images/moon.svg'
const Navbar = ({ toggleMode, icon }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  
  return (
    <nav className="transition duration-800 flex border-solid border-pink-600 border-b shadow-2xl items-center justify-between flex-wrap bg-white dark:bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-pink-600 ml-6">
        <span className="font-light lg:text-5xl text-xl tracking-tight">
          DailyJS.
        </span>
      </div>
      <div className="block mr-6">
        <button
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex items-center px-2 py-2 border rounded text-teal-200 border-pink-600 text-pink-600 hover:border-pink-800 hover:text-pink-800"
        >
          <svg
            className=" fill-current lg:h-7 lg:w-7 h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`bg-solid border-t border-pink-600 my-3 w-full flex-grow ${
          navbarOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-sm items-center flex flex-col">
          <Link href="/posts" as={`/posts`}>
            <a
              href={`/posts`}
              className="font-light block mt-4 text-pink-600 hover:text-pink-800 mr-4"
            >
              Blog
            </a>
          </Link>
          <Link href="/posts" as={`/posts`}>
            <a
              href={`/posts`}
              className="block font-light mt-4 text-pink-600 hover:text-pink-800 mr-4"
            >
              O mnie
            </a>
          </Link>
          <Link href="/posts" as={`/posts`}>
            <a
              href={`/posts`}
              className="block font-light mt-4 text-pink-600 hover:text-pink-800 mr-4"
            >
              Kontakt
            </a>
          </Link>
          <button
            type="button"
            onClick={toggleMode}
            className="block mt-4 mr-4 text-pink-500"
          >
            <img src={icon} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
