import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projectSection}>
      {["A", "B", "C"].map((project, index) => (
        <div className={styles.projectContainer} key={index}>
          <div className={styles.projectContent}>
            <h2>Project {project}</h2>
            <p>
              This is a project made to learn the latest languages by building an app
            </p>
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