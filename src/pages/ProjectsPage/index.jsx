//do I create a NavData with the URLs to my projects here?
import ProjectItem from "..ProjectItem.jsx"


const Projects = () => {

    return (
       <div>
         <h1>Projects</h1>
         <ul className="project-list">{ProjectDisplay}</ul>
      </div>
    )   
   }
   
   export default Projects