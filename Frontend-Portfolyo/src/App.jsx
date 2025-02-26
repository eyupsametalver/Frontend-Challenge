import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduce from './components/Introduce'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { LanguageContexts } from './context/LanguageContexts'



function App() {
 

  return (
    <>
     <LanguageContexts>
     <Navbar/>
     <Introduce/>
     <Skills/>
     <Profile/>
     <Projects/>
     <Footer/>
     </LanguageContexts>
   
   
    </>
  )
}

export default App