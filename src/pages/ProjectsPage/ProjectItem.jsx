import { NavLink } from "react-router-dom"

const ProjectItem = ({link, title}) => {
    return (
        <li className="project-item"> <NavLink to={link}>{title}</NavLink></li>
    )
}

export default ProjectItem