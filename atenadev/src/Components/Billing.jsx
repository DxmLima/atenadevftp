import React from 'react'
import { useState } from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
import {RxDotFilled} from 'react-icons/rx'
function Billing() {

  const slides = [
    {
      url: 'https://cdn.discordapp.com/attachments/1058254939794702398/1067892812986712135/Frame_1.png'
    },

    {
      url: 'https://cdn.discordapp.com/attachments/1058254939794702398/1068555704404824124/Medpy.png'
    },

    {
      url: 'https://cdn.discordapp.com/attachments/1058254939794702398/1068635068584689745/TOM.png'
    },

   
   
  ];

  const [curredIndex, setCurretIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = curredIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : curredIndex -1;
    setCurretIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = curredIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : curredIndex +1;
    setCurretIndex(newIndex);
  };


  return (

    

    <div id='portfolio' className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[curredIndex].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      </div>
      {/* Left Arrow */}
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaAngleDoubleLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaAngleDoubleRight onClick={nextSlide} size={30} /> 
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div className='text-[16px] cursor-pointer text-white'>
            <RxDotFilled />
          </div>
        )
        )}
      </div>
      </div>
      

  )
}

export default Billing