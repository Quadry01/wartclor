import React from "react";
import Image from "next/image";
import logo from "../components/Navbar/unilag_logo.png";
import Link from 'next/link'


function About() {
  return (
    <>
      <section className="animate-fade-up bg-dark-blue  text-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <Image
            className="m-auto"
            src={logo}
            width={200}
            height={200}
            alt="unilag logo"
          ></Image>
          <p className="mb-8 text-1xl font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
            OFFICE OF THE DEPUTY VICE-CHANCELLOR (A&R) RESEARCH & INNOVATION
            OFFICE
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            WEST AFRICAN REGIONAL RESEARCH AND TRAINING CENTRE FOR LOW VISION
            REHABIILITATION (WARTCLOR)
          </h1>
          <p className="mb-8 text-justify text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-20 ">
            There is currently no training institution or research Centre for
            Low Vision professionals in the entire West African region. There is
            marked scarcity of Low Vision services providers and the lack of
            opportunities to train professionals in the field currently
            exacerbates the challenges of access to low vision services for
            individuals living with blindness and Low Vision. There is also
            dearth of cutting-edge research in the area of Low vision as well as
            a remarkably inadequate access to Low vision devices and assistive
            technologies enabling individuals with Low vision to live meaningful
            lives unaided. The poor access to Low vision rehabilitation
            services, devices, technologies for independent living has made
            lives of many visually impaired persons unbearably frustrating as
            they practically depend on sighted family members and friends to
            perform simple tasks of daily living. The proposed Centre intends to
            build capacity and develop a critical mass of Low vision experts
            that will respond to the growing needs for Low vision Services,
            cutting-edge research in the field of Low vision, as well as improve
            access to Low vision services and local availability of assistive
            technologies through strong partnerships in continuing
            (postgraduate) education and research. The approach is built on a
            multi-disciplinary platform involving experts in the fields of
            Ophthalmology, Optometry, allied Medical sciences, Public health,
            Sociology, and Engineering. To bridge the professional capacity gap,
            the centre proposes to run the following programmes in collaboration
            with the Western Michigan University, USA
          </p>

          <div className="grid md:grid-cols-2 gap-8 bg-dark-blue lg:px-20">
            <div className="bg-gray-50  border border-gray-200 rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
                Mission
              </h2>
              <p className="text-lg text-justify font-normal text-gray-500  mb-4">
                The mission of the Centre is to improve the quality of life of
                individuals with low vision through provision of excellent low
                vision rehabilitation services by competently trained vision
                rehabilitation specialists and cutting-edge research.{" "}
              </p>
            </div>
            <div className="bg-gray-50  border border-gray-200  rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900  text-3xl font-extrabold mb-2">
                Vision
              </h2>
              <p className="text-lg text-justify font-normal text-gray-500  mb-4">
                {" "}
                The vision of the proposed Centre will be to provide a platform
                for quality training and research in Low Vision care, as well as
                inform policy and practice for the adoption of international
                best practices in Low Vision training and service delivery.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 text-left mt-16  p-8 md:p-12">
            <h2 className="text-gray-900 e text-3xl font-extrabold mb-2">
              Our Programs
            </h2>
            <ul className="list-disc" >
              <Link href={"/OMR"}><li>PGD Orientation & Mobility (Part- Time)</li></Link>
              <Link href={"/VRT"}><li>M.Sc in Vision Rehabilitation Therapy (Part Time)</li></Link>
              <Link href={"/OM"}> <li>M.Sc Orientation & Mobility Rehabilitation (Part-Time)</li></Link>
              <Link href={"/PVR"}> <li>PGD in Vision Rehabilitation Therapy(Part Time)</li></Link>
            </ul>
          </div>


<Link
              href="/"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium border-white-4 text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Back to Home
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
      </section>
    </>
  );
}

export default About;
