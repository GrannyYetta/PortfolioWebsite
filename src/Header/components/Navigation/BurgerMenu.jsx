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
    <div className={styles.burgerMenu}>
        <button className="navBtn" onClick={toggleBurger}><img src={burgerMenuOpen ? Close : Lightbulb} className="" width="40px"/></button>
        
</div>

)}

export default BurgerMenu