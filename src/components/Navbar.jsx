import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location=useLocation()
  return (
    <div className='flex justify-end'>
    <div className='mt-0 p-2 flex justify-center bg-stone-700 md:ml-20 w-84 md:w-xl rounded-bl-xl rounded-tr-2xl'>
      <Link to="/" className={location.pathname==="/" ? "text-yellow-500 m-2 md:mx-5 text-lg" : " text-gray-300 text-lg m-2 md:mx-5  hover:text-white"}>
      About
      </Link>
      <Link to="/Resume" className={location.pathname==="/Resume" ? "text-yellow-500 m-2 md:mx-5  text-lg" : " text-gray-300 text-lg m-2 md:mx-5  hover:text-white"}>
      Resume
      </Link>
      <Link to="/projects" className={location.pathname==="/projects" ? "text-yellow-500 m-2 md:mx-5  text-lg" : " text-gray-300 text-lg m-2 md:mx-5  hover:text-white"}>
      Projects
      </Link>
      <Link to="/Contact" className={location.pathname==="/Contact" ? "text-yellow-500 m-2 md:mx-5  text-lg" : " text-gray-300 text-lg m-2 md:mx-5  hover:text-white"}>
      Contact
      </Link>
    </div>
    </div>
  )
}

export default Navbar
