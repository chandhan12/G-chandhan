import React from 'react'
import profilepic from '../assets/photos/prophoto.jpg'

const Sidebar = () => {
  return (
    <div className=' h-screen w-72 bg-gray-800 rounded-2xl flex flex-col items-center '>
     <div className='m-2 p-2  h-80 mt-10 flex flex-col justify-center' >
        <img src={profilepic} alt="" className='h-48 w-48 rounded-3xl'/>
        <h2 className='text-2xl font-semibold m-2 p-2 text-slate-200'>G Chandhan</h2>
        <p className='bg-gray-700 p-1 rounded-xl h-8 w-44 text-slate-300 text-md text-center'>Full Stack Developer</p>
     </div>
     <p className='bg-slate-500 h-0.5 w-56 rounded-2xl'></p>
     <div>
        
     </div>
    </div>
  )
}

export default Sidebar
