import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    Aos.init();

  }, [])

  return (
    <>
      <Navbar />
      {/* <div> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      {/* </div> */}
    </>
  )
}

export default App
