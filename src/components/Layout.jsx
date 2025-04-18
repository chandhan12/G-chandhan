import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { ProjectContext } from './ProjectContextProvider'


const Layout = () => {
   const{selectedProject,setSelectedProject}=useContext(ProjectContext)
    const {popUp,setPopUp}=useContext(ProjectContext)
  return (
    <div className='text-white md:flex-row   flex flex-col mt-10 '>
        <div className='mb-2 pb-2 ml-4 mr-3 md:ml-4 md:mr-4 '> <Sidebar/></div>
        <div className='bg-stone-800 w-auto md:w-full h-auto mb-4 ml-4 mr-3  md:mr-10 rounded-2xl'>
            <Navbar/>
            <Outlet/>
        </div>
       </div>
  )
}

export default Layout
