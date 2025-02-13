import React from 'react'

const SkillsCard = (props) => {
    const{title,skills}=props
  
  return (
    <div className='p-2 m-1'>
      <p className='m-2 text-xl font-normal p-1'>{title}</p>
      <div className='flex gap-4 ml-3 flex-wrap'>
        {
            skills.map((eachItem)=>{
                return(
                    <div key={eachItem} className='bg-stone-100 w-auto cursor-pointer  rounded-md p-2 h-9 flex justify-center items-center text-stone-800 text-base'>{eachItem}</div>
                )

            })
        }
      </div>
    </div>
  )
}

export default SkillsCard
