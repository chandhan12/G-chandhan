import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);
  const [selectedProject,setSelectedProject]=useState("nothing")

  return (
    <ProjectContext.Provider value={{ popUp, setPopUp,selectedProject,setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
