import React from 'react'
const Contact = () => {
  return (
    <div className="mt-10 mb-24 flex flex-col items-center justify-center lg:px-40 px-10 bg-white dark:bg-gray-900 w-screen text-black dark:text-white">
      <h1 className="font-mono text-pink-600">Contact me</h1>
      <form className="mt-4 flex flex-col items-center justify-center w-4/5">
        <div className="m-2 text-center justify-center w-full md:w-3/6">
          <label className="block uppercase font-mono text-pink-600">
            Name
            <input className="font-mono block p-2 mt-2 border w-full border-solid border-pink-600" />
          </label>
        </div>
        <div className="m-2 text-center justify-center w-full md:w-3/6">
          <label className="block uppercase font-mono text-pink-600">
            E-mail
            <input className="font-mono block p-2 mt-2 border w-full border-solid border-pink-600" />
          </label>
        </div>
        <div className="m-2 text-center justify-center w-full md:w-3/6">
          <label className="block uppercase font-mono text-pink-600">
            Message
            <textarea className="font-mono block p-2 mt-2 border w-full border-solid border-pink-600" />
          </label>
        </div>
        <button className="border border-solid border-pink-600 p-2 mt-2 pulse hover:bg-pink-500 hover:scale-105 transform bg-pink-600 font-mono uppercase text-sm text-white">
          Send message
        </button>
      </form>
    </div>
  )
}

export default Contact
