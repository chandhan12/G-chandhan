import React from 'react'

const Works = (props) => {
    const{icon,title,decription}=props

  return (
    <div className='  h-auto w-auto transition-all hover:border-e-0 hover:border-b-0 hover:border hover:border-l-amber-400  hover:border-t-amber-400  bg-stone-700 cursor-pointer rounded-xl m-4 p-5'>
        <p className='m-1'>{icon}</p>
    <p className='m-1 mb-2 text-xl font-medium text-white'>{title}</p>
    <p className='m-1 text-stone-300'>{decription}</p>
  </div>
//   md:w-96 w-84
  )
}

export default Works
