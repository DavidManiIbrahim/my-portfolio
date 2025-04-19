// import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <Link to="/" className={styles.title}>Portfolio</Link>
        <div className="styles.menu">
            <ul className={styles.menuItems}>
            <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        </nav>
  )
}

export default Navbar