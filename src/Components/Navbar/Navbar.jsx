import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.Navbar}>
      <Link to="/" className={styles.title}>Portfolio</Link>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
      </div>

      <ul className={`${styles.menuItems} ${isOpen ? styles.showMenu : ""}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
