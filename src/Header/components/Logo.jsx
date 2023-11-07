import Lightbulb from '../../assets/noun-light-bulb-1916019.svg'
import styles from "../styling/Header.module.css"

const Logo = () => {
    console.log("styling", styles)
    return (
        <div className={styles.navLogo}>
            <a href="/" >
                <img src={Lightbulb} alt="lightbulb" className={styles.logo}/>
            </a>
        </div>
    )
}

export default Logo