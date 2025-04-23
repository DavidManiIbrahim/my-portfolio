import styles from "./Experience.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";



const Experience = () => {
  return (
    <div className={styles.experienceSection}>
      <div className={styles.techstackImages}>
        <h1>EXPERIENCE</h1>
        <div className={styles.iconContainer}>
        <div className={styles.iconGrid}>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faHtml5} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faCss3Alt} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faJs} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faReact} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faNodeJs} /></div>
  <div className={styles.iconBox}><SiTailwindcss /></div> {/* react-icons */}
</div>

        </div>
      </div>

      <div className={styles.experienceProjects}>
        <div className={styles.experience}>
          <div className={styles.google}>
            {/* <img src="" alt="google logo" /> */}
            <FontAwesomeIcon icon={faGoogle} size="4x" />
            <div className={styles.googleContent}>
              <h3>Software Engineer, Google</h3>
              <span>Sept, 2022 - Present</span>
              <ul>
                <li>Worked on Google Maps</li>
                <li>Reduced load time by 50%</li>
              </ul>
            </div>
          </div>



          <div className={styles.netflix}>

            <img src="/netflix.png" alt="Netflix Logo" width={80} />


            <div className={styles.netflixContent}>
              <h3>SWE Intern, Netflix</h3>
              <span>April, 2020 - Jan, 2021</span>
              <ul>
                <li>Worked on component library</li>
              </ul>
            </div>

          </div>

          <div className={styles.microsoft}>
            {/* <img src="" alt="microsoft logo" /> */}
            <FontAwesomeIcon icon={faMicrosoft} size="4x" />
            <div className={styles.microsoftContent}>
              <h3>UI Designer, Microsoft</h3>
              <span>Aug, 2021 - Aug, 2022</span>
              <ul>
                <li>Worked on Windows 11</li>
                <li>Designed the control panel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
