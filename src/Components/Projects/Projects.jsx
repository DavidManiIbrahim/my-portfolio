import styles from "./Projects.module.css";
// import React from "react";

const Projects = () => {
  return (
    <>
      {/* <!-- project section --> */}

      <div className={styles.projectSection}>
        <div className={styles.projectContainer}>
          {/* <!-- <div className={box}> --> */}
          {/* <img src={} alt="project image" width="300px"> */}

          <div className={styles.projectContent}>
            <h2>Project A</h2>
            <p>
              This is a project made to learn the latest languages by building
              an app
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

        <div className={styles.projectContainer}>
          {/* <!-- <div className={box}> --> */}
          {/* <img src={} alt="project image" width="300px"> */}
          <div className={styles.projectContent}>
            <h2>Project B</h2>
            <p>
              This is a project made to learn the latest languages by building
              an app
            </p>
            <div className={styles.lang}>
              <button>React</button>
              <button>Express</button>
              <button>Node</button>
            </div>
            <div className="btn">
              <button>Demo</button>
              <button>Source</button>
            </div>
          </div>
        </div>

        <div className={styles.projectContainer}>
          {/* <!-- <div className="box"> --> */}
          {/* <img src="./vlcsnap-2024-12-29-19h23m09s344.png" alt="project image" width="300px"> */}
          <div className={styles.projectContent}>
            <h2>Project c</h2>
            <p>
              This is a project made to learn the latest languages by building
              an app
            </p>
            <div className="lang">
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
      </div>
    </>
  );
};

export default Projects;
