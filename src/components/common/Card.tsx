import { Book, Star,  Timelapse } from '@mui/icons-material'
import React from 'react'

const card = () => {
  return (
  <section className='bg-white h-screen flex gap-7 flex-wrap p-9'>
    <div className='bg-white text-black w-[23rem] h-[34rem] md:w-[23rem] md:h-[28rem] rounded-lg shadow-xl mb-2 border hover hover:border-green-600'>
        <div className='p-5  '>
          <img src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-03.jpg" alt="" className='w-[25rem] h-[10rem] object-cover rounded-lg  mb-5'/>
          <div className='flex gap-9 items-center mb-5 '>
              <img src="/home/author-11.webp" alt="Author image" className=' w-12 rounded-full' />
              <div className='hover:text-green-600 transition delay-150 cursor-pointer'>Akash kumar Rout</div>
              <button className='bg-green-100 py-1 px-6 rounded-lg text-green-500 hover:bg-green-600 hover:text-white transition delay-200'>science</button>
          </div>
          <p className='mb-5 hover:text-green-600 transition delay-150 cursor-pointer'>Lorem ipsum dolor sit amet consectetur adipisicing  vero!</p>
          <div className='flex items-center mb-5 '>
              <Timelapse className='text-green-300 mr-2'/>
              <div className='mr-16 text-gray-500'>08 hr 15 mins</div>
              <Book className='text-green-300 mr-2'/>
              <div className='text-gray-500'>29Lectures</div>
          </div>
            <div className='flex flex-wrap items-center gap-5 bg-green-100 p-3 rounded-lg'>
              <div className='text-green-600 font-bold text-xl'>$386.00</div>
              <div>$440.00</div>
              <div>4.9</div>
                <div className=''>
                <Star className='w-4 text-yellow-800'/>
                <Star  className='w-4 text-yellow-800'/>
                <Star  className='w-4 text-yellow-800'/>
                <Star  className='w-4 text-yellow-800'/>
                <Star  className='w-4 text-gray-400'/>
                </div>
            </div>
          
        </div>
      </div>


  </section>
  )
}

export default card