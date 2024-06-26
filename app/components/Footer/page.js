import React from 'react'
import Image from 'next/image'
import logo from '../Navbar/unilag_logo.png'
function Footer() {
  return (
    

<footer className="px-8 w-full h-full bg-dark-blue ">
    <div className="w-full  p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src={logo} width={50} height={50}  className='me-2' alt=" Logo"></Image>
                  <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">WARTCLOR</span>
              </a>
          </div>
          <div className=" gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Quick Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a target={0} href="https://unilag.edu.ng/" className=" text-white hover:underline">University of Lagos</a>
                      </li>
                      <li>
                          <a  target={0} href="https://research.unilag.edu.ng/" className=" text-white hover:underline">Research & Innovation Website</a>
                      </li>
                  </ul>
              </div>
              
              {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                  <ul className="text-white  font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div> */}
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">  &copy;  2024 <a href="wartclor.com" className=" text-white hover:underline">Wartclor</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>



  )
}

export default Footer