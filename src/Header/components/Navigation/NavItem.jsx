import { NavLink } from "react-router-dom"


const NavItem = ({link, title}) => {
    return (
      <li><NavLink to={link}>{title}</NavLink></li>  
    )
}

export default NavItem