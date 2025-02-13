import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContextProvider";
import Nestly from '../assets/photos/Nestly.png'
import BrainVaultImg from '../assets/photos/BrainVault.png'

const ProjectDetailsPopup = () => {
  const { popUp, setPopUp, selectedProject } = useContext(ProjectContext);

  // Hardcoded projects data (you may fetch this dynamically)
  const projects = [
    {
      title: "Nestly",
      image:Nestly,
      description: "This is a real estate application.",
      techStack: ["React.js", "Node.js", "MongoDB", "Firebase"],
      liveLink: "https://example.com/nestly",
      githubLink: "https://github.com/chandhan12/nestly",
    },
    {
      title: "Brain Vault",
      image:BrainVaultImg,
      description: "A knowledge storage platform.",
      techStack: ["React.js", "TypeScript", "MongoDB"],
      liveLink: "https://example.com/brainvault",
      githubLink: "https://github.com/chandhan12/brainvault",
    },
    // Add more projects...
  ];

  // Find the selected project details
  const project = projects.find((p) => p.title === selectedProject);

  if (!popUp || !project) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-10 transition-all  duration-300 animate-fadeIn">
      {/* Popup Card */}
      <div className="bg-stone-800 p-6 m-2 rounded-lg md:h-136 max-h-auto shadow-lg w-auto md:w-3xl  overflow-y-scroll no-scrollbar border border-stone-700 transform animate-scale-up transition-all duration-300">
        <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-yellow-400">{project.title}</h2>
        <p>&</p>
        </div>
        <img src={project.image} className="h-80 w-auto m-4" alt="" />
        <p className="text-stone-300">{project.description}</p>
        <h3 className="mt-2 font-medium text-white">Tech Stack:</h3>
        <ul className="list-disc list-inside text-stone-400">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between">
          <a
            href={project.liveLink}
            target="_blank"
            className="text-blue-400 hover:underline"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="text-blue-400 hover:underline"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <button
          onClick={() => setPopUp(false)}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsPopup;
