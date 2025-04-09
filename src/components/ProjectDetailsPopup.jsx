import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContextProvider";
import Nestly from '../assets/photos/Nestly.png'
import BrainVaultImg from '../assets/photos/BrainVault.png'
import Novapay from '../assets/photos/Novapay.png'
import Startupathon from '../assets/photos/Startupathon.png'
import CourseSellingApp from '../assets/photos/CourseSellingApp.png'
import ResponsiveDashboard from '../assets/photos/ResponsiveDashboard.png'
import { closeIcon, GithubIcon, liveLinkIcon, liveLinkIcon2 } from "../Icons/Icons";

const ProjectDetailsPopup = () => {
  const { popUp, setPopUp, selectedProject } = useContext(ProjectContext);

 
  const projects = [

        {
          title: "Persist-Startupathon",
          caption: "An assignment for a company (got offer) for a Full-Stack Developer role (Not Responsive)", 
          image: Startupathon,
          liveLink: "https://persist-startupathon-delta.vercel.app/",
          githubLink: "https://github.com/chandhan12/Persist-Startupathon.git",
          description1: `This is a complete recreation of the official Persist-Startupathon website, given as an assignment for a Full-Stack Developer role. 
          I successfully completed the assignment and received an offer from the company. 
          The task was to build an admin dashboard (frontend and backend) where the admin can add new challenges, change their visibility status, and delete challenges.`,
          
          description2: `The admin can also add completers of a challenge to the homepage from the dashboard and manage (add/delete) founders through the same interface.
          A complete full-stack application with a pixel-perfect frontend designed from a Figma file, which helped me secure an offer from the company.`,
          
          description3: `Note: This application was developed specifically for the selection process and is optimized only for desktop view. It is not responsive on smaller screen sizes.
          `,
         
          techStack: ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"]
        },

      {
        title:"Nestly",
        caption:"Find Your Perfect Home with Ease",
        image:Nestly,
        liveLink:"https://github.com/chandhan12/Nestly-4th-sem-project.git",
        githubLink:"https://github.com/chandhan12/Nestly-4th-sem-project.git",
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
        liveLink:"https://github.com/chandhan12/BrainVault.git",
        githubLink:"https://github.com/chandhan12/BrainVault.git",
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
        title:"Responsive dashboard",
        caption:"Responsive  Dashboard with OTP Authentication",
        image:ResponsiveDashboard,
        liveLink:"https://greendzine-assigniment.vercel.app/",
        githubLink:"https://github.com/chandhan12/Greendzine-assigniment.git",
        description1:`I developed a responsive dashboard with a seamless user authentication flow using local storage. 
        Users can register and log in, with their credentials securely stored in the browser's local storage. 
        Upon logging in, they are redirected to an OTP verification page, where they can request an OTP. 
        The OTP is generated dynamically, displayed via an alert, and stored in 
        local storage with a validity of 30 seconds to ensure security. If the OTP expires, users can request a new one.`,
        description2:`Once the OTP is successfully verified, users gain access to a 
        fully responsive dashboard, featuring interactive charts populated with dummy data. 
        The dashboard is designed to offer a clean and user-friendly 
        experience across different devices, ensuring smooth navigation.`,
        description3:`This project demonstrates my expertise in frontend development, 
        local storage management, and state handling while focusing on a secure and engaging user experience. It showcases 
        my ability to create intuitive authentication systems and dynamic UI elements with real-time validations.`,
        techStack:["Reactjs","Chartjs","Taildwind Css"]
      },
      
      {
        title:"Course selling App",
        caption:"Backend for a course selling app",
        image:CourseSellingApp,
        liveLink:"https://github.com/chandhan12/course-app.git",
        githubLink:"https://github.com/chandhan12/course-app.git",
        description1:`I built a robust backend for a course selling application, 
        enabling seamless admin and user management. The admin panel allows administrators to 
        register and log in, create new courses by providing details such as course name, description, 
        and price, and manage all courses they have created. 
        Admins can also view a list of purchased courses and modify course details like name and price, ensuring dynamic content management.`,
        description2:`On the user side, students can register and log in to explore 
        all available courses. They can purchase courses, access their purchase history, 
        and manage their profiles. The backend ensures smooth
         handling of user transactions, securely storing user and course data while providing an intuitive experience for both admins and users.`,
         description3:`This project highlights my expertise in backend development, 
         authentication, and database management, ensuring a secure and scalable course-selling platform. 
         With structured API endpoints and efficient data handling, 
         it delivers a streamlined purchasing experience while maintaining admin control and flexibility over course content.`,
        techStack:["Reactjs","Nodejs","MongoDb","Express"]
      },
      
      {
        title:"Nova pay",
        caption:"Your Gateway to Seamless Transactions",
        image:Novapay,
        liveLink:"https://github.com/chandhan12/NovaPay.git",
        githubLink:"https://github.com/chandhan12/NovaPay.git",
        description1:`I developed a secure payment application where users can register and 
        log in using JWT authentication. Once authenticated, users can view a list of all registered users and 
        initiate payments to selected users. The application ensures a smooth and secure transaction process, 
        allowing users to send payments effortlessly while maintaining data integrity and consistency.`,
        description2:`To prevent transactional inconsistencies, I implemented MongoDB transactions, 
        ensuring that payments either fully succeed or completely fail—eliminating issues where an amount is 
        debited from one account but not credited to another. This project showcases my expertise in secure authentication, 
        transactional database operations, and backend architecture, ensuring reliability and trust in digital payments.`,
        techStack:["React","Nodejs","MongoDb","Express",'Tailwind Css']
      }
    ]
  const project = projects.find((p) => p.title === selectedProject);

  if (!popUp || !project) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 transition-all  duration-300 animate-fadeIn">
      
      <div className="bg-stone-800 p-6 m-2 rounded-xl md:h-136 h-136 border-e-0 border-b-0 border border-l-amber-200  border-t-amber-200   shadow-lg w-auto md:w-3xl overflow-auto  md:overflow-y-scroll no-scrollbar  border-stone-700 transform animate-scale-up transition-all duration-300">
        <div className="flex justify-between">
          <div>
          <h2 className="text-xl font-semibold text-yellow-400">{project.title}</h2>
          <p className='text-stone-300 text-base m-1'>{project.caption}</p>
          </div>
        <button onClick={()=> setPopUp(false)}>{closeIcon}</button>
        </div>
        <img src={project.image} className="md:h-80 h-fit md:w-auto w-full ml-2 my-4 rounded-lg" alt="" />
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
                <a target="_blank" href={project.liveLink} className="hover:text-yellow-500"><div className="flex gap-1 p-1 justify-center items-center text-yellow-500  transition-colors "><p className="">{liveLinkIcon2}</p> <p>Live</p></div></a>

              </div>
              <div className="bg-stone-600 h-8 w-24 rounded-xl hover:text-yellow-500 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400">
                <a target="_blank" href={project.githubLink} className="hover:text-yellow-500"><div className="flex gap-1 p-1 justify-center items-center text-yellow-500  transition-colors "><p className="">{GithubIcon}</p> <p>GitHub</p></div></a>

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
