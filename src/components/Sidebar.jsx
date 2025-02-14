import React from 'react'
import profilepic from '../assets/photos/prophoto.jpg'
import { GithubIcon, leetcodeIcon, LinkedinIcon, locationIcon, message, phoneIcon, ResumeIcon, twitterIcon } from '../Icons/Icons'






const Sidebar = () => {
  return (
    <div className=' md:h-full h-auto pb-4 md:w-72 w-full bg-stone-800 rounded-2xl flex flex-col items-center '>
     <div className='m-2 p-2  h-auto  mt-10 flex md:flex-col justify-center' >
        <img src={profilepic} alt="" className='md:h-48 md:w-48 h-24 w-24 rounded-3xl'/>
        <div className='md:flex flex flex-col '>
        <h2 className='md:text-2xl text-xl font-semibold m-2 p-2 text-stone-200'>G Chandhan</h2>
        <p className='bg-stone-700 md:p-1 hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400 rounded-xl md:h-8 md:w-44 h-10 w-full p-2 ml-2 cursor-pointer text-stone-300 md:text-md text-center '>Full Stack Developer</p>
        </div>
     </div>
     <p className='bg-stone-500 h-0.5 md:w-56 w-72 rounded-2xl'></p>
     <div className='mt-5'>
    
     <div className='flex p-2 '>
            <p className='text-yellow-500 text-2xl font-semibold m-1'>{message} </p>
            <p className='text-stone-200 text-base m-1'>chandhan.g0401@gmail.com</p>
            
         </div>
         <div className='flex p-2 '>
            <p className='text-yellow-500 text-2xl font-semibold m-1'>{phoneIcon} </p>
            <p className='text-stone-200 text-base m-1'>+91-9398641656</p>
            
         </div>
         <div className='flex p-2 '>
            <p className='text-yellow-500 text-2xl font-semibold m-1'>{locationIcon} </p>
            <p className='text-stone-200 text-base m-1'>Bengaluru,Karnataka</p>
            
         </div>
    
     </div>
     <div className='separator'></div>
     <div className='flex p-2 flex-wrap '>
        <div className='bg-stone-700 rounded-xl p-2 m-2 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400'>
        <a target="_blank" className=" hover:text-yellow-500 transition-colors mb-2" href="https://www.linkedin.com/in/g-chandhan-aa4478255/">{LinkedinIcon}</a>
        </div>
        <div className='bg-stone-700 rounded-xl p-2 m-2 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400'>
        <a target="_blank" className=" hover:text-yellow-500 transition-colors mb-2" href="https://github.com/chandhan12">{GithubIcon}</a>
        </div>
        <div className='bg-stone-700 rounded-xl p-2 m-2 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400'>
        <a target="_blank" className=" hover:text-yellow-500 transition-colors mb-2" href="https://x.com/gorlanna78874">{twitterIcon}</a>
        </div>
        <div className='bg-stone-700 rounded-xl p-2 m-2 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400'>
        <a target="_blank" className=" hover:text-yellow-500 transition-colors mb-2" href="https://leetcode.com/u/Chandhan1-/">{leetcodeIcon}</a>
        </div>
        <div className='bg-stone-700 rounded-xl p-2 m-2 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400'>
        <a target="_blank" className=" hover:text-yellow-500 transition-colors mb-2" href="/G Chandhan Resume.pdf">{ResumeIcon}</a>
        </div>
     </div>
    </div>
  )
}

export default Sidebar
