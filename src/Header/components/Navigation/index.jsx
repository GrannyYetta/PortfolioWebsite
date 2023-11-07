import { NavData } from "../../../data/NavData"
import NavItem from "./NavItem"
import Hamburger from "./Hamburger"


const Navigation = () => {

    const MyNavigation = NavData.map(item => {
        return (<NavItem key={item.uuid} link={item.link} title={item.title}/>)
    })
    return (
        <nav>
            <ul className="nav-list">{MyNavigation}</ul>
            <Hamburger />
        </nav>
    )
}

export default Navigation