import Lightbulb from '../../assets/noun-light-bulb-1916019.svg'
import styles from "../styling/Header.module.css"

const Logo = () => {
    return (
        <div className="nav-logo">
            <a href="/" >
                <img src={Lightbulb} alt="lightbulb" className="logo" />
            </a>
        </div>
    )
}

export default Logo