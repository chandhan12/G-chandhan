import React from 'react'

const Works = (props) => {
    const{icon,title,decription}=props

  return (
    <div className='  h-auto w-auto  bg-slate-700 rounded-xl m-4 p-5'>
        <p className='m-1'>{icon}</p>
    <p className='m-1 mb-2 text-xl font-medium text-white'>{title}</p>
    <p className='m-1 text-slate-300'>{decription}</p>
  </div>
//   md:w-96 w-84
  )
}

export default Works
