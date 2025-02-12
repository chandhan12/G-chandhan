import React from 'react'

const content=[
    {
        tabId:"About",
        title:"About me",
        description:"about content goes here"
    },
    {
        tabId:"Resume",
        title:"my resume",
        description:"resume content goes here"
    },
    {
        tabId:"Pojects",
        title:"my projects ",
        description:"project content goes here"
    },
    {
        tabId:"contact",
        title:"contact me",
        description:"contact form content goes here"
    },

]
const MainContent = () => {
  return (
    <div>
        <div>
            <button>About</button>
            <button>Resume</button>
            <button>Projects</button>
            <button>Contact</button>
        </div>
      main content goes here navbar and stuff
      {
        content.map((eachItem)=>{
            return(
                <div>
                    <p>{eachItem.title}</p>
                    <p>{eachItem.description}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default MainContent
