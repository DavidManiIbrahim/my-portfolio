/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import styles from "./Hero.module.css"
import myImg from "../../assets/DMI.jpg"

const Hero = () => {

  return (
    <div className={styles.Container}>
        <div className={styles.text}>
          <h1>Hi, I'm MANI</h1>
          <p className={styles.description}>I'm a Front-end Web Developer with 2 years 
           of experience. <br />
            I use Html, Css, Javascript, Git, Bootstrap, Tailwind css & React js .<br />
            Reach out to me if you'll like to know more
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