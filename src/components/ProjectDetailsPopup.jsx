import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContextProvider";
import Nestly from '../assets/photos/Nestly.png'
import BrainVaultImg from '../assets/photos/BrainVault.png'
import { closeIcon, GithubIcon, liveLinkIcon, liveLinkIcon2 } from "../Icons/Icons";

const ProjectDetailsPopup = () => {
  const { popUp, setPopUp, selectedProject } = useContext(ProjectContext);

 
  const projects = [
    {
      title:"Nestly",
      caption:"Find Your Perfect Home with Ease",
      image:Nestly,
      liveLink:"djb",
      githubLink:"uhhax",
      description1:`The real estate application allows users to sign up, sign in, or log in using Google OAuth. 
      Once logged in, users can manage their profile, including updating their profile image, username, email, 
      and password, as well as delete their account and sign out.Users can add, edit, or delete their property 
      listings and view detailed information about houses.
      Additionally, users can predict house prices based on location, square footage, number of bathrooms, and bedrooms.`,

      description2:`They can also contact property owners directly through email.
      The app features a search functionality with filters (sale, rent, offer, parking, furnished) to help users find the right house.`,

      description3:`Additionally, users can predict house prices based on location, square footage, number of bathrooms, and bedrooms.`,
      techStack:["React","Nodejs","Express","MongoDb","Firebase","Tailwind Css"]
    },
    {
      title:"Brain Vault",
      caption:"Your Digital Brain for Everything Important",
      image:BrainVaultImg,
      liveLink:"djb",
      githubLink:"uhhax",
      description1:`BrainVault allows you to store important links like YouTube videos, Twitter posts, documents, and more, 
      while adding relevant tags for easy categorization and quick retrieval. The dashboard provides a central location to 
      view all your saved content, with sidebar filters that let you sort by YouTube, Twitter, documents, or links for 
      effortless navigation. `,
      description2:`You can also generate a unique sharable link for your collection, allowing others to 
      access your BrainVault through the shared link.`,
      description3:` Designed with Tailwind CSS, the application features a clean, 
      user-friendly, and responsive interface.`,
      techStack:["React","TypeScript" ,"Nodejs","MongoDb","Tailwind Css"]
    },
    {
      title:"Nova pay",
      caption:"Your Gateway to Seamless Transactions",
      image:Nestly,
      liveLink:"djb",
      githubLink:"uhhax",
      description:"this is a realestate application",
      techStack:["React","Nodejs","MongoDb","Firebase"]
    },
    {
      title:"Course selling App",
      caption:"Backend for a course selling app",
      image:Nestly,
      liveLink:"djb",
      githubLink:"uhhax",
      description:"this is a realestate application",
      techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
    },
    {
      title:"Responsive dashboard",
      caption:"Frontend project",
      image:Nestly,
      liveLink:"djb",
      githubLink:"uhhax",
      description:"this is a realestate application",
      techStack:["Reactjs","Nodejs","MongoDb","Firebase"]
    }
  ]

  const project = projects.find((p) => p.title === selectedProject);

  if (!popUp || !project) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 transition-all  duration-300 animate-fadeIn">
      
      <div className="bg-stone-800 p-6 m-2 rounded-lg md:h-136 h-136  shadow-lg w-auto md:w-3xl overflow-auto  md:overflow-y-scroll no-scrollbar border border-stone-700 transform animate-scale-up transition-all duration-300">
        <div className="flex justify-between">
          <div>
          <h2 className="text-xl font-semibold text-yellow-400">{project.title}</h2>
          <p className='text-stone-300 text-base m-1'>{project.caption}</p>
          </div>
        <button onClick={()=> setPopUp(false)}>{closeIcon}</button>
        </div>
        <img src={project.image} className="md:h-80 h-72 md:w-auto w-80 m-4 rounded-lg" alt="" />
        <h3 className="mt-2 m-2 font-medium text-white">Techlonogies used:</h3>
        <div className="flex gap-3 ml-2 flex-wrap ">
          {project.techStack.map((tech, index) => (
            <div className="bg-stone-600 text-xs flex justify-center  items-center md:h-auto h-9 w-auto font-medium text-stone-100 rounded-xl pl-2 cursor-pointer pr-2 p-1 hover:text-yellow-500" key={index}>{tech}</div>
          ))}
        </div>
        <p className="text-stone-300  mt-3 ml-3 p-1">{project.description1}</p>
        <p className="text-stone-300  mt-3 ml-3 p-1">{project.description2}</p>
        <p className="text-stone-300  mt-3 ml-3 p-1">{project.description3}</p>
       <div className='flex justify-between mt-4'>
              <div className="bg-stone-600 h-8 w-24  rounded-xl hover:text-yellow-500 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400">
                <a href={project.liveLink} className="hover:text-yellow-500"><div className="flex gap-1 p-1 justify-center items-center text-yellow-500  transition-colors "><p className="">{liveLinkIcon2}</p> <p>Live</p></div></a>

              </div>
              <div className="bg-stone-600 h-8 w-24 rounded-xl hover:text-yellow-500 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400">
                <a href={project.githubLink} className="hover:text-yellow-500"><div className="flex gap-1 p-1 justify-center items-center text-yellow-500  transition-colors "><p className="">{GithubIcon}</p> <p>GitHub</p></div></a>

              </div>
               
               </div>
        <button
          onClick={() => setPopUp(false)}
          className="mt-4 h-8 cursor-pointer w-20 p-1 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsPopup;
