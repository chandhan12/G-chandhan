import React from 'react'
import { pointIcon } from '../Icons/Icons'

const EducationCard = (props) => {
    const {college,branch,year,cgpa}=props
  return (
    <div className='p-2 m-2 w-auto'>
        <div className='flex flex-col'>
          <div className='flex gap-8 items-center '>
        <div className='bg-slate-700 h-4 w-4 flex justify-center items-center rounded-full'>{pointIcon}</div>
          <div>
            <p>{college}</p>
            
          </div>
          </div>
          <div className='ml-12 mt-2'>
            <p className='text-sm text-yellow-500 p-1'><span className='text-white mr-2 '>{branch } :</span>{year}</p>
            
            <p className='text-sm text-yellow-500 p-1'><span className='text-white mr-2 '>CGPA :</span>{cgpa}</p>
          </div>
          
        </div>
      </div>
  )
}

export default EducationCard
