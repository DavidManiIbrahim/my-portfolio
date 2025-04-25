/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faGithub, faFacebook, faWhatsapp, faMailchimp, fa500px, faCss3, faDiscord } from "@fortawesome/free-brands-svg-icons";

import styles from "./Hero.module.css"
// import myImg from "../../assets/DMI.jpg"

const Hero = () => {

  return (
    <div className={styles.Container}>
       <div className={styles.img}>
        <img className={styles.image} src="/DMI.jpg" alt="user image" />
      </div>
      <div className={styles.text}>
        <h1>Hi, I'm MANI</h1>
        <p className={styles.description}>
          I'm a Front-end Web Developer with 3 years of experience, I specialize in creating responsive,
          user-friendly websites using HTML, CSS, JavaScript, React, and modern frameworks like Tailwind CSS and Bootstrap.
          My goal is to craft seamless and impactful digital experiences.
          Let's connect if you're looking for a developer to bring your ideas to life."
        </p>
        {/* <button className={styles.btn}>Contact Me</button> */}
        <div className={styles.socials}>
          <a href="https://x.com/Mhanee001" target="_blank">
          <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://facebook.com/MANI" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://wa.me/+2348030488805" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://" target="_blank">
          <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.linkedin.com/in/david-ibrahim-636591293/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/davidmaniibrahim" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
     
    </div>
  )
}

export default Hero