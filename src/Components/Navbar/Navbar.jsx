// import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className="styles.menu">
            <ul className={styles.menuItems}>
            <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </nav>
  )
}

export default Navbar