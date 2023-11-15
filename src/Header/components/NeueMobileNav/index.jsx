import './mobile.css'
import Close from "../../../assets/x-lg.svg"
import Lightbulb from "../../../assets/noun-light-bulb-1916019.svg"
import Navigation from '../Navigation'
import {useState} from "react"


const NewMobileNav = () => {

const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => {
    setIsOpen((open) => !open)
}

    /**
     * 
     * 1. html struktur
     * 2. css um element sichbar zu machen
     * 3. trigger setzen und toggle machen true/false
     * 4. toggle für display value verwenden (block, none)
     */
    return(
        <>
        <div className='block-open'>
            <p className='text-menu-open'>Menu</p>
                <a className="w-inline-block" href="#">
                    <img onClick={toggleMenu} className='icon-menu' src={Lightbulb} alt="open" width={50} />
                </a>
        </div>
        <div className='nav-mobile-menu' style={{display: isOpen ? "flex": "none"}}>
            <nav className='nav-menu-w-nav-menu'>
                <Navigation />
            </nav >
        </div>
        </>
    )
}

export default NewMobileNav

