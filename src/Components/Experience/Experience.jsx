import styles from "./Experience.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAffiliatetheme, faAngular, faAutoprefixer, faBilibili, faBootstrap, faCss3, faDiscord, faFigma, faGit, faGitAlt, faGithubAlt, faGoogle, faHtml5, faJs, faJsSquare, faMicrosoft, faNode, faNodeJs, faNpm, faReact, faTelegram, faWix } from '@fortawesome/free-brands-svg-icons';
// import {
//   faHtml5,
//   faCss3Alt,
//   faJs,
//   faReact,
//   faNodeJs
// } from "@fortawesome/free-brands-svg-icons";
// import { SiTailwindcss } from "react-icons/si";

import { faXTwitter, faLinkedin, faGithub, faFacebook, faWhatsapp, faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";



const Experience = () => {
  return (
    <div className={styles.experienceSection}>
      <div className={styles.techstackImages}>
        <h1>EXPERIENCE</h1>
        <div className={styles.iconContainer}>
        <div className={styles.iconGrid}>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faHtml5} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faCss3} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faJs} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faReact} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faBootstrap} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faNodeJs} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faGitAlt} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faFigma} /></div>
  <div className={styles.iconBox}><FontAwesomeIcon icon={faGithub} /></div>

  {/* <div className={styles.iconBox}><FontAwesomeIcon icon={faTelegram} /></div> */}
  {/* <div className={styles.iconBox}><FontAwesomeIcon icon={faDiscord} /></div> */}

  {/* <div className={styles.iconBox}><FontAwesomeIcon icon={faReact} /></div> */}
  {/* <div className={styles.iconBox}><FontAwesomeIcon icon={faNodeJs} /></div> */}
  {/* <div className={styles.iconBox}><SiTailwindcss /></div>  */}
</div>

        </div>
      </div>

      <div className={styles.experienceProjects}>
        <div className={styles.experience}>
          <div className={styles.google}>
            
            <FontAwesomeIcon icon={faGoogle} size="4x" />
            <div className={styles.googleContent}>
              <h3>Computer Technician, Abelov int</h3>
              <span>Feb, 2021 - Present</span>
              <ul>
                <li>Worked on Customer Relationship Management System</li>
                {/* <li>Collect data and printout receipts</li> */}
              </ul>
            </div>
          </div>



          <div className={styles.netflix}>

            <img className={styles.intern} src="/netflix.png" alt="Netflix Logo" width={80} />


            <div className={styles.netflixContent}>
              <h3>Bitbyte Intern, Nexcent</h3>
              <span>June, 2024 - Nov, 2024</span>
              <ul>
                <li>Worked on Nextcent Website</li>
              </ul>
            </div>

          </div>

          <div className={styles.microsoft}>
            
            <FontAwesomeIcon icon={faMicrosoft} size="4x" />
            <div className={styles.microsoftContent}>
              <h3>Web Developer, Oasis Hub</h3>
              <span>Aug, 2024 - present</span>
              <ul>
                <li>Worked on Web3 website</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
