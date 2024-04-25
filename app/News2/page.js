import React from "react";
import Image from "next/image";
import news1 from "../components/News/news1.jpeg";
import news2 from "../components/News/nw1.jpeg";
import Link from "next/link";

function News2() {
  return (
    <div
      id="news"
      className="text-white bg-dark-blue lg:px-20 max-[600px]:px-4"
    >
      <h1 className="mb-4 px-4 pt-8 pb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-2 lg:text-4xl">
        Dr. Elyse Connors Presentation at WARTCLOR
      </h1>
      <p className="px-4">April 25, 2024</p>
      <div>
        <Image
          className="float-left m-4 max-[600px]:float-none"
          src={news1}
          height={200}
          width={350}
          alt="image"
        ></Image>

        <p className="mb-3 text-gray-500 text-justify ">
          Dr. Elyse M Connors, an Associate Professor at the Department of
          Blindness & Low Vision Studies, Western Michigan University in
          Kalamazoo Michigan, USA. She has received a Fulbright Scholar grant to
          visit the University of Lagos, Nigeria, between February and June
          2024. Through the visit, she will be assisting in capacity building to
          implement the newly approved postgraduate degree programmes at the
          West Africa Regional Research & Training Centre for Low Vision
          Rehabilitation (WARTCLOR). The first cohort of students for the PGD &
          MSC Vision Rehabilitation Therapy Program, and the Orientation &
          Mobility (O&M) programme are expected to commence in September of
          2024. Dr. Connors will be working to build capacity for the
          implementation of the newly approved programs, through the development
          of lecture materials and resources for new clinical classes. In
          addition, she will be working with faculty on research projects
          related to Low Vision Rehabilitation. Dr. Connors coordinates
          post-graduate programs in Vision Rehabilitation Therapy at her home
          university.
        </p>
        <p className="text-gray-500 text-justify ">
          Vision Rehabilitation Therapists teach persons with visual impairment
          how to carry out activities of daily living in safe and efficient
          ways. For example, how to cook safely without vision, how to access
          print information using technology, and how to keep track of money
          non-visually. Her home university also has postgraduate programs in
          Orientation and Mobility. Mobility instructors teach persons with
          visual impairment how to use the long cane, and orientation techniques
          to keep track of their location in space, to be able to travel safely
          and efficiently. Dr. Connors earned her Master of Religion at Asbury
          Seminary, a second Masters degree in Vision Rehabilitation Therapy and
          Orientation and Mobility at Western Michigan University, and her Ph.D.
          at Western Michigan University in Interdisciplinary Health Sciences.
          She has published papers on safer medication management for persons
          with low vision, the use of GIS mapping to target limited resources to
          address health disparities, and strategies for grass-roots
          organizations to strengthen the professional discipline of Vision
          Rehabilitation Therapy.
        </p>
      </div>

      <div className="pt-4 pb-8 ">
        <div className="text-gray-500   text-justify w-4/6 max-[600px]:w-full">
          There is also the option to join online if you can not join us
          in-person. <br />
          <div className="text-xl font-extrabold mb-2	">
            Topic: Capacity Building Workshop for the WARTCLOR Team Members
          </div>
          <span className="font-medium">
            {" "}
            Time: Apr 26, 2024 11:00 AM West Central Africa
          </span>
          <div className="font-bold mt-1">
            Meeting ID: 870 2339 5229 <br />
            Passcode: 434601
          </div>
          <br />
          <Link
          target="blank"
            className=""
            href={
              "https://us02web.zoom.us/j/87023395229?pwd=WkMxNFh3Y2FwVkpMdVMyOHAyZmZyQT09"
            }
          >
            <button className=" p-4 bg-dark-blue border-4 rounded-xl mt-2 ">
              Join Meeting
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default News2;
