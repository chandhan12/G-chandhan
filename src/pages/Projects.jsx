import React, { createContext, useContext, useState } from 'react'
import Nestly from '../assets/photos/Nestly.png'
import BrainVaultImg from '../assets/photos/BrainVault.png'
import ProjectCard from '../components/ProjectCard'
import {  ProjectContext, ProjectContextProvider } from '../components/ProjectContextProvider'
import ProjectDetailsPopup from '../components/ProjectDetailsPopup'
const myprojects=[
  {
    title:"Nestly",
    image:Nestly,
    liveLink:"djb",
    githubLink:"uhhax",
    description:"this is a realestate application",
    techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
  },
  {
    title:"Brain Vault",
    image:BrainVaultImg,
    liveLink:"djb",
    githubLink:"uhhax",
    description:"this is a realestate application",
    techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
  },
  {
    title:"Nova pay",
    image:Nestly,
    liveLink:"djb",
    githubLink:"uhhax",
    description:"this is a realestate application",
    techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
  },
  {
    title:"Course selling App",
    image:Nestly,
    liveLink:"djb",
    githubLink:"uhhax",
    description:"this is a realestate application",
    techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
  },
  {
    title:"Responsive dashboard",
    image:Nestly,
    liveLink:"djb",
    githubLink:"uhhax",
    description:"this is a realestate application",
    techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
  }
]


const Projects = () => {
  
  const {popUp,setPopUp}=useContext(ProjectContext)
  
  console.log(popUp)
  return (
    <div className={`p-6 `}>
    <h2 className='text-3xl font-semibold text-white m-2 mb-4'>Projects</h2>
    <div className='h-1 w-20 m-2 mt-5 rounded-2xl bg-yellow-500'></div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
    {
      myprojects.map((eachItem,index)=>{
        return(
         
          <ProjectCard  key={index} {...eachItem} />
       
        )
      })
    }
    </div>
    {popUp && <ProjectDetailsPopup />}

    </div>
  )
}

export default Projects
