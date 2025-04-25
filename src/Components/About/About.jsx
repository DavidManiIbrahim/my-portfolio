import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin, faGithub, faFacebook, faWhatsapp, faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";





const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.userImg}>
        <h1>ABOUT</h1>
        <img className={styles.aboutImg} src="/DMI.jpg" alt="user image" />
      </div>

      <div className={styles.userStacks}>
        <div className={styles.frontend}>
        {/* <FontAwesomeIcon icon={faAccessibleIcon} /> */}

          <div>
            <h3>Frontend Developer</h3>
            <p>
              I&apos;m a frontend developer with experience in building responsive and optimized sites.
            </p>
          </div>
        </div>

        <div className={styles.backend}>
          <div>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimized backend systems and APIs.
            </p>
          </div>
        </div>

        <div className={styles.mobile}>
          <div>
            <h3>Mobile Developer</h3>
            <p>
              I have experience in building mobile friendle application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
