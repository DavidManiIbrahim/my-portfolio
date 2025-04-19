import styles from "./About.module.css";
import myImg from "../../assets/DMI.jpg";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.userImg}>
        <h1>ABOUT</h1>
        <img className={styles.aboutImg} src={myImg} alt="user image" />
      </div>

      <div className={styles.userStacks}>
        <div className={styles.frontend}>
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

        <div className={styles.uiux}>
          <div>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple landing pages and created design systems as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
