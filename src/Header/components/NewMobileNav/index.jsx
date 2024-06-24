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
    return(

<div className='mobileNav'>
    <div className='mobileNavInner'>
        <Navigation/>
   </div>
</div>

    )
}

export default NewMobileNav

