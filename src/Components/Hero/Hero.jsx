/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styles from "./Hero.module.css"
import myImg from "../../assets/DMI.jpg"

const Hero = () => {

  return (
    <div className={styles.Container}>
      <div className={styles.text}>
        <h1>Hi, I'm MANI</h1>
        <p className={styles.description}>
        As a Front-end Web Developer with 3 years of experience, I specialize in creating responsive, 
        user-friendly websites using HTML, CSS, JavaScript, React, and modern frameworks like Tailwind CSS and Bootstrap.
         My goal is to craft seamless and impactful digital experiences.
          Let's connect if you're looking for a developer to bring your ideas to life."
        </p>
        <button className={styles.btn}>Contact Me</button>
      </div>
      <div className={styles.img}>
        <img className={styles.image} src={myImg} alt="user image" />
      </div>
    </div>
  )
}

export default Hero