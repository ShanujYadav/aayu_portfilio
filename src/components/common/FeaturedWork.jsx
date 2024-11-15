import React from 'react'
import img from '../../assets/image1.PNG'
import { FaTwitter } from "react-icons/fa";


const FeaturedWork = () => {
    return (
        <div className='py-16'>
            <div class="flex justify-center items-center">
                <h6 class="text-black text-2xl font-semibold font-serif">Featured Work</h6>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
                        <p class="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
                        <p class="mt-2 text-gray-500">Event Details...</p>
                    </div>
                </div>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
                        <p class="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
                        <p class="mt-2 text-gray-500">Event Details...</p>
                    </div>
                </div>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Event image" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
                        <p class="block mt-1 text-lg leading-tight font-medium text-black">Event Description</p>
                        <p class="mt-2 text-gray-500">Event Details...</p>
                        <FaTwitter color="blue" size={30} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturedWork