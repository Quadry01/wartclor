import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "./nw1.jpeg";
import data from "../Data/Data";

function Newspage() {
  return (
    <>
      <h1 className="inline-block p-2 mb-4 ml-20 bg-white  text-4xl border-y-4 text-dark-blue bold ">
        NEWS
      </h1>
      <div className=" justify-center flex flex-wrap  pb-20 hover:shadow-2xl">
        {data.news.map((item) => (
          <div
            key={item.key}
            class="max-w-sm m-4 bg-dark-blue border border-gray-200 rounded-lg shadow-md "
          >
            <div className="p-4">
              <Link href="#">
                <Image
                  class="rounded-t-lg"
                  width={400}
                  height={300}
                  src={image1}
                  alt=""
                />
              </Link>
            </div>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <p className="mb-4 mt-4 text-sm text-justify font-normal text-gray-700 ">
                {item.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium border text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Newspage;
