import { useParams } from "react-router-dom"
import { ProjectData } from "../../data/ProjectData";

const ProjectDetails = () => {

    //this is where myParams used to be, but was destructured 
    const {id} = useParams();
    console.log(id)
// this item is each object within ProjectData
    const relevantProject = ProjectData.filter( (item) => item.uuid === id)
    console.log(relevantProject)

    //preparation of the array to display (render) it in the component return proper
    const mySkills = relevantProject[0].skills.map( (item) => {
        return <div key={item.uuid}>{item.title}</div>
    })


    return (
        <div>
            <h1>{relevantProject[0].title}</h1>
            <p>These are the skills I used in this project:</p>
            {mySkills}
        </div>
    )
}

export default ProjectDetails