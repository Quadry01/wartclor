import React from 'react'

function Contact() {
  return (
    <section id='contact' className="animate-fade-up bg-dark-blue text-white sm:px-10">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
    <div className=' bg-dark-blue p-20 rounded-3xl'>

      <div className='w-full flex flex-wrap'>
       <div className='px-10'> <p className="mb-8 lg:mb-4 font-light text-gray-500  sm:text-xl">Email:</p>
                <p className="mb-8 lg:mb-4 font-light  text-gray-500  sm:text-xl">wartclor@unilag.edu.ng</p></div>

               <div className='px-10'>  <p className="mb-8 lg:mb-4 font-light  text-gray-500  sm:text-xl">Telephone:</p>
                <p className="mb-8 lg:mb-4 font-light  text-gray-500  sm:text-xl">+2349028436569</p></div>

      </div>

    </div>
  </div>
</section>
  )
}

export default Contact