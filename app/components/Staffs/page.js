"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import data from "../Data/Data";
import Link from "next/link";
import logo from "../Navbar/unilag_logo.png";
import { GoArrowRight } from "react-icons/go";


function Staff(e) {
  function HandleClick(item) {
    console.log(item);
  }
  return (
    <>
      <svg
        className="relative top-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#3C5B6F"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <section
        id="staff"
        className=" bg-light-yellow animate-fade-up justify-center  w-full h-auto px-4 pt-10 flex flex-wrap overflow-hidden"
      >
        <div className="text-center m-auto  text-4xl p-2 border-4 text-white bold  max-[600px]:text-2xl ">
          CENTRE MANAGEMENT TEAM
        </div>
        <div className=" flex  flex-wrap justify-center animate-fade-up h-auto pt-20  pb-4 w-full via-light-yellow max-[600px]:pb-10 max-[600px]:pt-10">
          {data.staff.map((item) => (
            <button onClick={HandleClick(item)} key={item.key}>
              <div className=" w-72 mx-2 my-2 h-80  max-w-sm bg-dark-blue shadow-lg shadow-blue-500/50 border-gray-200 rounded-lg  hover:shadow-2xl">
                <div className="flex flex-col items-center px-8 py-10">
                  <Image
                    className="w-28 h-28 mb-3 rounded-full shadow-lg"
                    width={650}
                    height={600}
                    src={item.img}
                    alt="staff image"
                  ></Image>
                  <h5 className="mb-1 text-l text-center font-medium text-white ">
                    {item.name}
                  </h5>
                  <span className="text-sm text-white ">{item.Department}</span>
                  <div className="flex mt-4 md:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg border border-gray-200  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      Email <SiGmail className="mx-1" />
                    </a>
                    <Link
                      href={`/${item.key}`}
                      className=" py-2 px-2 ms-2 text-sm font-medium text-white focus:outline-none  rounded-lg border border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                    >
                      Linkedin
                      <FaLinkedin className="inline mx-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <Link
          href={"/MainStaff"}
          className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center border-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
        >
          See more
          <GoArrowRight className="ml-2" />

        </Link>
      </section>


      <svg
        relative="true"
        top-20="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#3C5B6F"
          fillOpacity="1"
          d="M0,128L34.3,144C68.6,160,137,192,206,208C274.3,224,343,224,411,192C480,160,549,96,617,101.3C685.7,107,754,181,823,192C891.4,203,960,149,1029,133.3C1097.1,117,1166,139,1234,154.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Staff;
