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
    
        <div className='nav-mobile-menu'>
            <nav className='nav-menu-w-nav-menu'>
            <div className='nav-links-left' href="">
            <div className='block-close'>
                <p className='text-menu-close'>Close</p>
                {/* the next line contains the event handler */}
                <a className="w-inline-block" href="#"><img className='icon-menu close' src={Close} alt="close" /></a> 
            </div>
            {/* add flex on next tag */}
            <div className='block-open'>
                <p className='text-menu-open'>Menu</p>
                {/* next line is target of the event handler */}
                <a className="w-inline-block" href="#">
                    <img className='icon-menu' src={Lightbulb} alt="open" />
                </a>
            </div>
        </div>

                <Navigation/>
            </div>
        </nav>
       
    )
}

export default NewMobileNav