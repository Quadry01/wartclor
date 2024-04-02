
import React from "react";
import Image from "next/image";
import ij from "./course1.jpg";
import data from "../Data/Data"


function Course() {


   return <> 
   
   <div className= " animate-fade-up justify-center bg-white w-full h-auto px-10 pt-32 flex flex-wrap overflow-hidden ">
    
        <h1 className="text-center absolute top-0 bg-white p-2 text-4xl border-4 text-dark-blue bold mt-8">OUR PROGRAMS</h1>

    {data.course.map((item) =>
    
   <div key={item.key}  className="  mx-2  my-2 w-auto bg-dark-blue shadow-lg shadow-blue-500/50 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          className="rounded-t-lg"
          width={260}
          height={200}
          src={ij}
          alt="course"
        ></Image>
      </a>
      <div className="p-5">
            
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.course_name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
    </div>    
)}
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f0f0" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,240C480,256,600,256,720,229.3C840,203,960,149,1080,149.3C1200,149,1320,203,1380,229.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

</>
}

export default Course;
