import React from 'react'

const Footer = () => (
  <footer
    id="footer"
    className="fixed bottom-0 z-50 dark:bg-gray-900 shadow-2xl bg-white w-full border-solid border-pink-600 border-t"
  >
    <div className="py-4 flex flex-col justify-center items-center">
      <p className="focus:outline-none text-xs lg:text-md leading-none text-pink-600 ">
        2021 DailyJS. All Rights Reserved.
      </p>
    </div>
  </footer>
)

export default Footer
