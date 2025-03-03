import React from 'react'
import Works from '../components/Works'
import { CloudIcon, developmentIcon } from '../Icons/Icons'

const About = () => {
  return (
    <div className='p-6'>
      <h2 className='text-4xl font-semibold  text-white m-2 mb-4'>About Me</h2>
      <div className='h-1 w-20 m-2 mt-5 rounded-2xl bg-yellow-500'></div>
      <p className='text-wrap text-lg text-slate-300 m-2 p-2'>Hi, I am Chandhan!, I'm a Full-Stack Web Developer skilled in building
         responsive and high-performance applications
         using React.js, Next.js, and Tailwind CSS on the frontend and Node.js, Express.js, and MongoDB on the backend.
         I focus on creating intuitive user experiences with seamless functionality, scalability, and performance.</p>

         <p className='text-wrap text-lg text-slate-300 m-2 p-2'>With a strong foundation in problem-solving and backend development, 
          I have experience with RESTful APIs, PostgreSQL, Prisma, and NextAuth. 
          I enjoy solving challenges, optimizing performance, and ensuring secure data handling. 
          Always eager to learn, I aim to build scalable and user-friendly solutions.</p>

          <h2 className='text-4xl font-semibold text-white m-2 mb-4'>What I'm Doing</h2>
        <div className='h-1 w-20 m-2 mt-5 rounded-2xl bg-yellow-500'></div>
        <div className='grid md:grid-cols-2 p-3'>
          <Works icon={developmentIcon} title="Frontend Development" decription="Building responsive, user-friendly interfaces using modern frameworks and technologies."/>
          <Works icon={developmentIcon} title="Backend Development" decription="Creatingscalable backends with Node.js, Express.js, and MongoDB, focusing on performance and efficiency"/>
          <Works icon={CloudIcon} title="Cloud / Devops (Learning)" decription="I’m learning cloud technologies and DevOps practices to streamline app deployment and automation."/>
          
        </div>
        
      
    </div>
  )
}

export default About
