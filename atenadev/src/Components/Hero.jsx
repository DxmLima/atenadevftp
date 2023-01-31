import React from 'react'
import GetStarted from './GetStarted'
function Hero() {
  return (
    <section id='home' className='flex md:flex-row flex-col'>
      <div className='flex-1 justify-start flex-col x1:px-0 sm:px-16 px-6'>
       
       <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppin font-semibold ss:text-[24px] text-white pt-6'>
          Hello, I'am a  <br className='sm:block hidden' />
        <span className=' hover:animate-pulse font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ss:text-[40px] text-[34px]'>
              Front-End Developer <br className='sm:block hidden' /></span>
        </h1>
       </div>

       <p className='text-white pt-6'>
        Hello, I'm Mateus and I work with front-end development, creating websites,<br /> templates and providing maintenance and marketing management services. <br /> Interested in services?<br />
        Check out more info below!
       </p>

       <div className='pt-6 button 1'>
            <button class=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href="#services"> Our Services</a>
            </span>
            </button>
              
            <button class=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="#contact">Hire-me!</a>
            </span>
           </button>
       </div>

      
       

      </div>
    </section>
  )
}

export default Hero