import React from 'react'

const Newsletter = () => {
  return (
    <form className="w-full md:w-auto">
      <div className="flex w-full md:w-auto">
        <div className="relative w-full flex">
          <input
            type="email"
            id="email"
            className="px-6 py-5 w-full z-20 text-sm bg-fe-dark text-fe-gray-4 placeholder:text-fe-gray-4 focus-visible:rounded-none md:w-80"
            placeholder="email"
            required
          />
          <button
            type="submit"
            className="px-6 py-5 h-full uppercase text-xs font-medium text-black bg-fe-gray-3"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  )
}

export default Newsletter
