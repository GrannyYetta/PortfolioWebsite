
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"
import Title from "./components/Title"
import './index.css'


const Header = () => {
    return (
        <div>
            <header>
            <Logo />
            <Title />
            <Navigation/>
            </header>
        </div>
        
    )
}

export default Header