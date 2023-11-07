
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"
import Title from "./components/Title"
import styles from "./styling/Header.module.css"

const Header = () => {
    console.log("styling", styles)
    return (
       
            <header className={styles.headerWrapper}>
            <Logo />
            <Title />
            <Navigation/>
            </header>
       
        
    )
}

export default Header