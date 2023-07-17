import styles from "./styling/Pages.module.css"
import myImage from "../assets/becka-taboada.jpeg"

const About = () => {
 return (
  <div>
   <div className="about">
    <div className="about-me-title">
      <h2>About Me</h2>
      </div>
    <div className="about-me-text">
      <p>Hi! I am a highly motivated Junior Web Developer based in Berlin. My skills and knowledge include HTML, CSS, and JavaScript and I am confident in designing user-friendly interfaces and responsive layouts. I am experienced in working with frameworks like React, ExpressJS and Bootstrap, as well as CMS platforms such as Contentful. I am detail-oriented and strive for excellence in my work, ensuring functionality, efficiency, and a great user experience. I am eager to join a dynamic team to further enhance their skills and contribute to innovative web development projects.
      </p>
      <p>I have experience using various tools and technologies such as SAP Move, collaborative digital tools, Excel, SQL, Git, HTML, CSS, JavaScript, Bootstrap, ReactJS, NodeJS, ExpressJS, and MongoDB. I am also trained in project management methodologies like Scrum.
      </p>
      <p>In a past life, many moons ago, I used to work in the non-for-profit sector as a project manager, network coordinator and as a trainer and facilitator. I have even taught German as a foreign language! However, last year I decided to give myself a new skillset for my birthday and finally pursue coding full time because I am ready to tackle new challenges.
      </p>
    </div>
    <div>
    <div className={styles.aboutMeImg}>
      <img src={myImage} alt="A profile picture of Rebeca Taboada" className={styles.beckaPicture}/>
    </div>
    </div>
    </div>
    </div>
 )   
}

export default About