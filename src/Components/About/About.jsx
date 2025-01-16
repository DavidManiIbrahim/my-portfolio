// import React from 'react'"
import styles from "./About.module.css";
import myImg from "../../assets/DMI.jpg";

const About = () => {
  return (
    <div>
      {/*  About Section  */}

      <div className={styles.aboutSection}>
        <div className={styles.userImg}>
          <h1>ABOUT</h1>
          <img className={styles.aboutImg} src={myImg} alt="user image" />
        </div>
        {/* <div className={styles.box}> */}
          <div className={styles.userStacks}>
            <div className={styles.frontend}>
              <img src="" alt="info" />
              <div className="">

              <h3>frontend Developer</h3>
              <p>
                I&apos;m a frontend developer with experience in building
                responsive and optimized sites
              </p>
              </div>
            </div>
          <div className={styles.backend}>
            <img src="" alt="info" />
            <div>
              <h3>backend Developer</h3>
              <p>
                I have experience developing fast and optimized backend systems
                and API&apos;s
              </p>
            </div>
          </div>
          <div className={styles.uiux}>
            <img src="" alt="info" />
            <div className={styles.uiuxContent}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created Designe
                systems as well
              </p>
            </div>
          </div>
        {/* </div> */}
      </div>
          </div>
    </div>
  );
};
export default About;
