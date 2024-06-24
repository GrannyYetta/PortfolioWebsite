
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"
import Title from "./components/Title"
import styles from "./styling/Header.module.css"
import NewMobileNav from './components/NewMobileNav'

const Header = () => {
    return (
       
            <header className={styles.headerWrapper}>
                <NewMobileNav/>
            <Logo />
             <Title />
            <Navigation/>
            </header>
       
        
    )
}

export default Header