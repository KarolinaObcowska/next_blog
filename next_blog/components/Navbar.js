import React from 'react'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900  p-6">
      <div className="flex items-center flex-shrink-0 text-pink-600 ml-6">
        <span className="font-semibold lg:text-5xl text-xl tracking-tight">
          DailyJS.
        </span>
      </div>
      <div className="block mr-6">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-pink-600 text-pink-600 hover:border-pink-300 hover:text-pink-300">
          <svg
            className="fill-current lg:h-7 lg:w-7 h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
