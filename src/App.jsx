// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import styles from "./styles/App.module.css"
import About from "./Components/About/About.jsx"
import Experience from "./Components/Experience/Experience.jsx"
// import Projects from "./Components/Projects/Projects.jsx"

const App = () => {
  return (
    <div className={styles.App}>
     <Navbar />
     <Routes>
      <Route path="/" element={<Hero />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/experience" element={<Experience />}></Route>
      {/* <Route path="/projects" element={<Projects />}></Route> */}
     </Routes>
     {/* <Hero /> */}
     {/* <About /> */}
     {/* <Experience /> */}
     {/* <Projects /> */}
      </div>
  )
}

export default App