//do I create a NavData with the URLs to my projects here?
import ProjectItem from "./ProjectItem.jsx"
import {ProjectData} from "../../data/ProjectData"


const Projects = () => {

  const ProjectList = ProjectData.map(item =>{
    return (<ProjectItem key={item.uuid} title={item.title} uuid={item.uuid} />)
  })

    return (
       <div>
         <h1>Projects</h1>
         <ul className="project-list">{ProjectList}</ul>
      </div>
    )   
   }
   
   export default Projects