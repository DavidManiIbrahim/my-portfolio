

import styles from "./Projects.module.css";

const Projects = () => {
  const titles = ["Voting App", "Ecommerce", "CRMS"]
  const descriptions = [`A user friendly digital platform that enables secure and transparent voting for various topics, issues or candidate.`,
   `A fully functional online store built to provide seamless shopping experience for customers`,
    `A customer relationship management system designed to streamline customer interaction, sales processes, and data management.`]
  const images = [`/vite.svg`,`/vite.svg`,`/vite.svg`]
  return (
     
    <div className={styles.projectSection}>
      {titles.map((title, index) => (
        <div className={styles.projectContainer} key={index}>
          <div className={styles.projectContent}>
            <img src={images[index]} alt="" />
            <h2> {title} </h2>
            <p>
              {descriptions[index]}
            </p>
            <div className={styles.imageContainer}>

            </div>
            <div className={styles.lang}>
              <button>React</button>
              <button>Express</button>
              <button>Node</button>
            </div>
            <div className={styles.btn}>
              <button>Demo</button>
              <button>Source</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;