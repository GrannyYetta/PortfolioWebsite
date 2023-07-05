import { NavData } from "../../../data/NavData"
import NavItem from "./NavItem"

const Navigation = () => {

    const MyNavigation = NavData.map(item => {
        return (<NavItem key={item.uuid} link={item.link} title={item.title}/>)
    })
    return (
        <nav>
            <ul className="nav-list">{MyNavigation}</ul>
        </nav>
    )
}

export default Navigation