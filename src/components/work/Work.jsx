import React from 'react'
import { FaTwitter } from "react-icons/fa"


const Work = () => {
  return (
    <div className='py-16'>
      <div class="flex justify-center items-center">
        <h6 class="text-black text-2xl font-bold font-serif mt-4"> Work</h6>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-60" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
          </div>

          <div class="p-6 font-serif">
            <p class="block mt-1 text-lg leading-tight font-medium font-semibold text-black">Event Description</p>
            <div className="flex text-sm my-2">
              <span className="text-white mr-3 bg-pink-400 p-1 px-2 rounded-full">date</span>
              <span className="text-gray-600 font-semibold text-lg">year</span>
            </div>
            <p class="mt-2 text-gray-500">Event Details...</p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-60" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
          </div>

          <div class="p-6 font-serif">
            <p class="block mt-1 text-lg leading-tight font-medium font-semibold text-black">Event Description</p>
            <div className="flex text-sm my-2">
              <span className="text-white mr-3 bg-pink-400 p-1 px-2 rounded-full">date</span>
              <span className="text-gray-600 font-semibold text-lg">year</span>
            </div>
            <p class="mt-2 text-gray-500">Event Details...</p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img class="h-48 w-full object-cover md:w-60" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
          </div>

          <div class="p-6 font-serif">
            <p class="block mt-1 text-lg leading-tight font-medium font-semibold text-black">Event Description</p>
            <div className="flex text-sm my-2">
              <span className="text-white mr-3 bg-pink-400 p-1 px-2 rounded-full">date</span>
              <span className="text-gray-600 font-semibold text-lg">year</span>
            </div>
            <p class="mt-2 text-gray-500">Event Details...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Work