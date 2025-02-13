
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { ProjectContextProvider } from './components/ProjectContextProvider'


function App() {
  

  return (
   
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProjectContextProvider><Layout/></ProjectContextProvider> }>
        <Route path='/' element={<About/>}  />
        <Route path='/Resume' element={<Resume/>}  />
        <Route path='/projects' element={<ProjectContextProvider><Projects/></ProjectContextProvider> }  />
        <Route path='/contact' element={<Contact/>}  />
        </Route>
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
