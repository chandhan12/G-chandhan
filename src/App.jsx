import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className='text-white md:flex-row  flex flex-col '>
        <div className='mb-2 pb-2'> <Sidebar/></div>
        <div className='bg-slate-300 w-full'>
              hello
        </div>
       
      
       </div>
   
  )
}

export default App
