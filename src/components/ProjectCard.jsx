import React, { useContext } from 'react'
import {  ProjectContext } from './ProjectContextProvider'


const ProjectCard = (props) => {
    const {image,title,liveLink,githubLink,description,techStack}=props
    const {popUp,setPopUp}=useContext(ProjectContext)
    const {selectedProject,setSelectedProject}=useContext(ProjectContext)

    const openPopUp=()=>{
      setSelectedProject(title)
      setPopUp(true)
    

    }

  return (
    <div className='h-64 w-auto   m-2 p-4 border-l-0 border-t-0 border border-b-amber-400  border-e-amber-400 rounded-xl bg-stone-700'>
      <div className='h-40 w-auto hover:scale-105 transition-all '><img src={image} alt="" className=' rounded-md h-full w-full cursor-pointer' /></div>
      <p>{title}</p>
      <div className='flex justify-between'>
        <button onClick={openPopUp} className='cursor-pointer h-8 w-15  hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400  bg-stone-800 text-stone-300 hover:text-yellow-500 rounded-md'>open</button>
        <div>
        <a target='_blank' href={liveLink}>LiveLink</a>
        <a  target="_blank" href={githubLink}>GitHub</a>
        </div>
      </div>
      

    </div>
  )
}

export default ProjectCard
