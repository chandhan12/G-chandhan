import React from 'react'
import { bookIcon, pointIcon } from '../Icons/Icons'
import EducationCard from '../components/EducationCard'

const Resume = () => {
  return (
    <div className='p-6'>
    <h2 className='text-3xl font-semibold text-white m-2 mb-4'>Resume</h2>
    <div className='h-1 w-20 m-2 mt-5 rounded-2xl bg-yellow-500'></div>
    <div className='p-1 '>
      <div className='flex items-center gap-2 m-2 '>
        <div className='h-10 w-10 bg-slate-700 border-e-0 border-b-0 border border-l-amber-400  border-t-amber-400  rounded-xl  flex items-center justify-center'>{bookIcon}</div>
        <div>
        <h2 className='text-2xl font-semibold text-white m-2 mb-4'>Education</h2>
        </div>
      </div>
      <EducationCard college="Acharaya Institute of Management and sciences" branch="MCA" year="2022-2024" cgpa="7.85" />
      <EducationCard college="Vivekananda Degree College" branch="Bsc" year="2019-2022" cgpa="8.69" />
      <EducationCard college="Balayesu Jr college" branch="Intermediate(12th)" year="2017-2019" cgpa="9.75" />
    </div>
    <h2 className='text-2xl font-semibold text-white m-2 mb-4'>My Skills</h2>
   
    <div className='bg-slate-700 h-96 w-full rounded-xl mt-2'>

    </div>
    </div>
  )
}

export default Resume
