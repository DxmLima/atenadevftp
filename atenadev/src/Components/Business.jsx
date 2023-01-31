import React from 'react'

function Business() {
  return (
    <div id='about' className='p-6'>
      <h1 className='text-white text-2xl'>
          About-Me
      </h1>

      <div className='p-6'>
      <a href="#" class="flex flex-col items-center bg-yellow border border-purple-400 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-black dark:border- dark:bg-black dark:hover:bg-[#0e0e0e]">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front-End Developer since 2018</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">start my studies in 2019 acquiring knowledge about HTML, CSS, Javascript. nowadays I work in the complete development of websites using cms tools like wordpress and programming languages ​​and frameworks like: React JS, Vue JS</p>
          </div>
      </a>     
      </div>
    </div>
    
  )
}

export default Business