import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.experienceSection}>
      <div className={styles.techstackImages}>
        <h1>EXPERIENCE</h1>
        <img src="" alt="Tech Stack Illustration" />
      </div>

      <div className={styles.experienceProjects}>
        <div className={styles.experience}>
          <div className={styles.google}>
            <img src="" alt="google logo" />
            <div className={styles.googleContent}>
              <h3>Software Engineer, Google</h3>
              <span>Sept, 2022 - Present</span>
              <ul>
                <li>Worked on Google Maps</li>
                <li>Reduced load time by 50%</li>
              </ul>
            </div>
          </div>

          <div className={styles.microsoft}>
            <img src="" alt="microsoft logo" />
            <div className={styles.microsoftContent}>
              <h3>UI Designer, Microsoft</h3>
              <span>Aug, 2021 - Aug, 2022</span>
              <ul>
                <li>Worked on Windows 11</li>
                <li>Designed the control panel</li>
              </ul>
            </div>
          </div>

          <div className={styles.netflix}>
            <img src="" alt="netflix logo" />
            <div className={styles.netflixContent}>
              <h3>SWE Intern, Netflix</h3>
              <span>April, 2020 - Jan, 2021</span>
              <ul>
                <li>Worked on component library</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
