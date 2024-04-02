import React from 'react'

const CommonHero = ({name}: any) => {
    console.log(name);
  return (
     <section className='flex w-full h-screen bg-[rgb(231,248,238)] text-black item-center text-center mt-24'>
        <img src="/home/shape-8.webp" className='w-32 h-32 absolute top-32 left-16' alt="" />
      <div className='flex flex-wrap w-full items-center justify-around gap-64'>
      
        <div  >
            <div>Home// <span className='text-green-700 font-semibold'> {name}</span></div>
            <h1 className='text-4xl font-semibold'><span className='text-green-700'>{name}</span>  Learn Mate</h1>
        </div>
        
        <div className='flex'>
            <img className='w-44 h-44' src="\home\batchLogo.PNG" alt="" />
            <img className='rounded-full w-60 h-60' src="/home/author-11.webp" alt="" />
        </div>
      </div>
      <img src="/home/shape-24.webp" className='w-96 h-96 absolute right-2 top-36' alt="" /> 
      <img src="/home/shape-23.webp" className='w-40 h-40 absolute left-16 top-96' alt="" />


       {/*
       <img src="/home/shape-9.webp" className='w-32 h-32' alt="" />
       */}
     </section>
  )
}

export default CommonHero