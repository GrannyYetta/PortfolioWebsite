import { NavLink } from "react-router-dom"

const ProjectItem = ({uuid, title}) => {
    return (
        <li className="project-item"> <NavLink to={uuid}>{title}</NavLink></li>
    )
}

export default ProjectItem