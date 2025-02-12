import React from 'react'

const Works = (props) => {
    const{icon,title,decription}=props

  return (
    <div className='  h-auto w-auto  bg-slate-700 rounded-xl m-4 p-5'>
        <p>{icon}</p>
    {title}
    <p>{decription}</p>
  </div>
//   md:w-96 w-84
  )
}

export default Works
