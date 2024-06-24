import { NavLink } from "react-router-dom"
import styles from '../../styling/Header.module.css'


const NavItem = ({link, title}) => {
  console.log(styles)
    return (
      <NavLink to={link}>
        <li className={styles.navItem}>
          {title}
        </li>  
        </NavLink>
    )
}

export default NavItem