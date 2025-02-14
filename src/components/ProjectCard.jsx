import React, { useContext } from 'react'
import {  ProjectContext } from './ProjectContextProvider'
import { GithubIcon, liveLinkIcon } from '../Icons/Icons'


const ProjectCard = (props) => {
    const {image,title,caption,liveLink,githubLink,description,techStack}=props
    const {popUp,setPopUp}=useContext(ProjectContext)
    const {selectedProject,setSelectedProject}=useContext(ProjectContext)

    const openPopUp=()=>{
      setSelectedProject(title)
      setPopUp(true)
    

    }

  return (
    <div className='h-auto w-auto   m-2 p-4 border-l-0 border-t-0 border border-b-amber-400  border-e-amber-400 rounded-xl bg-stone-700'>
      <div className='h-40 w-auto mb-2 hover:scale-105 transition-all '><img onClick={openPopUp} src={image} alt="" className=' rounded-md h-full w-full cursor-pointer' /></div>
      <p className='text-xl font-semibold text-white '>{title}</p>
      <p className='text-stone-300 text-base m-1'>{caption}</p>
      <div className='flex justify-between m-2 '>
        <div>
        <button onClick={openPopUp} className='cursor-pointer h-8 w-15 mt-2  hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400  bg-stone-800 text-stone-300 hover:text-yellow-500 rounded-md'>open</button>
        </div>
        <div className='flex'>
        <div className='bg-stone-800 cursor-pointer rounded-full p-2 m-2 h-8 w-8 md:h-9 md:w-9 hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400   '>
        <a  target="_blank" className=" hover:text-yellow-500 transition-colors mb-2 text-center  " href={githubLink}>{liveLinkIcon}</a>
        </div>
        <div className='bg-stone-800 cursor-pointer rounded-full p-2 m-2 h-8 w-8 md:h-9 md:w-9 hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400    '>
        <a  target="_blank" className=" hover:text-yellow-500 transition-colors mb-2 text-center " href={githubLink}>{GithubIcon}</a>
        </div>
        
        </div>
      </div>
      

    </div>
  )
}

export default ProjectCard
