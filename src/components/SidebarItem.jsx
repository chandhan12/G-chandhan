import React from 'react'

const SidebarItem = (props) => {
    const{icon,text}=props
  return (
    <div className='flex p-2 '>
            <p className='text-yellow-500 text-2xl font-semibold m-1'>{icon} </p>
            <p className='text-slate-200 text-base m-1'>{text}</p>
            
         </div>
  )
}

export default SidebarItem
