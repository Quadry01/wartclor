import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "./nw1.jpeg";
import data from "../Data/Data";

function Newspage() {
  return (
    <div className="text-white ">
              <div className=" m-auto  w-36 border-4 text-center text-dark-blue bold text-4xl max-[600px]:text-2xl">NEWS</div>

      <div className=" justify-center flex flex-wrap  pb-20 ">
        {data.news.map((item) => (
          <div
            key={item.key}
            className="max-w-sm m-4 bg-dark-blue border border-gray-200 rounded-lg hover:shadow-2xl "
          >
            <div className="p-4">
              <Link href="/News1">
                <Image
                  className="rounded-t-lg h-56 w-full"
                  width={0}
                  height={400}
                  src={item.photo}
                  alt=""
                />
              </Link>
            </div>
            <div className="p-5">
              <Link href="/News1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
              </Link>
              <p className="mb-4 mt-4 text-sm text-justify font-normal text-gray-700 ">
                {item.description}
              </p>
              <Link
                href={item.path}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newspage;
