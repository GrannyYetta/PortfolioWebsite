import { NavData } from "../../../data/NavData"
import NavItem from "./NavItem"

// import BurgerMenu from "./BurgerMenu"


const Navigation = () => {

    const MyNavigation = NavData.map(item => {
        return (<NavItem key={item.uuid} link={item.link} title={item.title}/>)
    })
    return (
        <nav>
            <ul >{MyNavigation}</ul>
        </nav>
    )
}

export default Navigation