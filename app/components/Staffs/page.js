import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import data from "../Data/Data";

function Staff() {
  return (
    <section className="animate-fade-up justify-center  w-full h-auto px-10 pt-32 flex flex-wrap overflow-hidden">
      <div className="text-center m-auto  text-4xl p-2 border-4 text-dark-blue bold mt-4 max-[600px]:text-2xl ">
        CENTRE MANAGEMENT TEAM
      </div>
      <div className=" flex  flex-wrap justify-center animate-fade-up h-auto py-10 w-full via-light-yellow">
        {data.staff.map((item) => (
          <div
            key={item.key}
            className=" w-72 mx-2 my-2  max-w-sm bg-dark-blue shadow-lg shadow-blue-500/50 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center px-8 py-10">
              <Image
                className="w-28 h-28 mb-3 rounded-full shadow-lg"
                width={650}
                height={600}
                src={item.img}
                alt="Bonnie image"
              ></Image>
              <h5 className="mb-1 text-xl text-center font-medium text-white dark:text-white">
                {item.name}
              </h5>
              <span className="text-sm text-white dark:text-gray-400">
                {item.Department}
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg border border-gray-200  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Email <SiGmail className="mx-1" />
                </a>
                <a
                  href="#"
                  className=" py-2 px-2 ms-2 text-sm font-medium text-white focus:outline-none  rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Linkedin
                  <FaLinkedin className="inline mx-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staff;
