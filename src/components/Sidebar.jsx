import React from 'react'
import profilepic from '../assets/photos/prophoto.jpg'
import { locationIcon, message, phoneIcon } from '../Icons/Icons'
import SidebarItem from './sidebarItem'



const Sidebar = () => {
  return (
    <div className=' md:h-screen md:w-72 w-full bg-slate-800 rounded-2xl flex flex-col items-center '>
     <div className='m-2 p-2  h-auto mt-10 flex md:flex-col justify-center' >
        <img src={profilepic} alt="" className='md:h-48 md:w-48 h-36 w-36 rounded-3xl'/>
        <div className='md:flex flex flex-col '>
        <h2 className='md:text-2xl text-xl font-semibold m-2 p-2 text-slate-200'>G Chandhan</h2>
        <p className='bg-slate-700 md:p-1 rounded-xl md:h-8 md:w-44 h-10 w-full p-2 ml-2 text-slate-300 md:text-md text-center '>Full Stack Developer</p>
        </div>
     </div>
     <p className='bg-slate-500 h-0.5 w-56 rounded-2xl'></p>
     <div className='mt-5'>
     <SidebarItem icon={message} text="chandhan.g0401@gmail.com"/>
     <SidebarItem icon={phoneIcon} text="+91-9398641656"/>
     <SidebarItem icon={locationIcon} text="Bengaluru,Karnataka"/>
     </div>
    </div>
  )
}

export default Sidebar
