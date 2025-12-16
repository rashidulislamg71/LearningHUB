
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <div className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-87.5" />
        <button className=" cursor-pointer p-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
           <AiOutlineSearch className=" text-3xl  text-white" />
        </button>
    </div>
  )
}

export default SearchBar