import React from 'react'
import styles from "./Projects.module.css";


const Items = (props) => {
  return (
    <div className={styles.projectSection}>
      <div className={styles.projectContainer} key={index}>
        <div className={styles.projectContent}>
          <h2> {title} </h2>
          <p>
            {props.project1.description}
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
  </div>
  )
}

export default Index















// import React from 'react'
// import styles from "./Projects.module.css";


// const Items = (props) => {
//   return (
//     <div className={styles.projectSection}>
//     {["Voting App", "Ecommerce", "CRMS"].map((project, index) => (
//       <div className={styles.projectContainer} key={index}>
//         <div className={styles.projectContent}>
//           <h2> {project} </h2>
//           <p>
//             {props.description}
//           </p>
//           <div className={styles.lang}>
//             <button>React</button>
//             <button>Express</button>
//             <button>Node</button>
//           </div>
//           <div className={styles.btn}>
//             <button>Demo</button>
//             <button>Source</button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
//   )
// }

// export default Index