
import React from "react";
import Image from "next/image";
import data from "../Data/Data"
import Link from 'next/link'




function Course() {


   return <> 
   
   <div id="course" className= " animate-fade-up justify-center bg-white w-full h-auto px-4 pt-32 pb-0 flex flex-wrap overflow-hidden max-[600px]:pb-10">
    
        <h1 className="text-center absolute top-0 bg-white p-2 text-4xl border-4 text-dark-blue bold mt-8 max-[600px]:text-2xl">OUR PROGRAMS</h1>

    {data.course.map((item) =>
    
   <div key={item.key}  className="  mx-2  my-2 w-72 bg-dark-blue rounded-lg  hover:shadow-2xl">
      <Link href={item.path}>
        <Image
          className="rounded-t-lg"
          width={300}
          height={300}
          src={item.image}
          alt="course image"
        ></Image>
      </Link>
      <div className="p-5">
            
        <Link href={item.path}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{item.course_name}</h5>
        </Link>
        <p className="mb-3 font-normal text-white dark:text-gray-400">{item.description}</p>
        <Link href={item.path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
      </div>
    </div>    
)}
</div>

</>
}

export default Course;
