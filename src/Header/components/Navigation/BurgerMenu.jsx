import Lightbulb from '../../../assets/noun-light-bulb-1916019.svg'
import Close from '../../../assets/x-lg.svg'
import { useState } from 'react'
import styles from '../../styling/Header.module.css'


const BurgerMenu = () => {

    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurger = () => {
        setBurgerMenuOpen(!burgerMenuOpen)
    }

    return (
        <>
    <div className={styles.burgerMenu}>
        <button className="navBtn" onClick={toggleBurger}>
            <img src={Lightbulb} className="" width="40px"/>
        </button>  
    
    </div>

    <div id="mobileNavigation" className={styles.mobileNav} 
            style={{display: burgerMenuOpen ? "block" : "none"}}
    >
        <button className="navBtn" onClick={toggleBurger}>
            <img src={Close} width="40px" />
        </button>

        {/** stlye the nav links in this area to 
         * full width 
         * finger friendly li item size
         */}
        <ul className='mob-nav-list'>
            <li className='mob-nav-item'>link1</li>
            <li className='mob-nav-item'>link2</li>
            <li className='mob-nav-item'>link3</li>
            <li className='mob-nav-item'>link4</li>
        </ul>
    

    </div>
</>


)}

export default BurgerMenu