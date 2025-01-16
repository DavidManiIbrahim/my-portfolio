// import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import styles from "./styles/App.module.css"
import About from "./Components/About/About.jsx"
import Experience from "./Components/Experience/Experience.jsx"
import Projects from "./Components/Projects/Projects.jsx"

const App = () => {
  return (
    <div className={styles.App}>
     <Navbar />
     <Hero />
     <About />
     <Experience />
     <Projects />
      </div>
  )
}

export default App