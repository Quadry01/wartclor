import React from 'react'
import Image from "next/image";
import img from "../Navbar/unilag_logo.png"

function Staff
() {
  return (
   <div>

<div className="w-full max-w-sm bg-dark-blue shadow-lg shadow-blue-500/50 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
    
    <div className="flex flex-col items-center px-8 py-10" >
        <Image className="w-28 h-28 mb-3 rounded-full shadow-lg" width={500} height={500} src={img} alt="Bonnie image"></Image>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
    </div>
</div>



    </div>
  )
}

export default Staff
