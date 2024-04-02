import React from "react";
import Image from "next/image";
import ij from "./course1.jpg"
import data from "../Data/Data"
console.log(data)
  console.log("i love")
function Course() {
  

  return (
      
<div className="p-10">
<div className="max-w-sm bg-dark-blue shadow-lg shadow-blue-500/50 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg"      width={400}
      height={200} src={ij} alt="course"></Image>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Course Name</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

 </div>
  );
}

export default Course;
