
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  

  return (
   
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<About/>}  />
        <Route path='/Resume' element={<Resume/>}  />
        <Route path='/projects' element={<Projects/>}  />
        <Route path='/contact' element={<Contact/>}  />
        </Route>
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
