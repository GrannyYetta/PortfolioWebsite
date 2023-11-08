import Lightbulb from '../../../assets/noun-light-bulb-1916019.svg'
import Close from '../../../assets/x-lg.svg'
import { useState } from 'react'
import styles from '../../styling/Header.module.css'

const BurgerMenu = () => {

  console.log(Lightbulb)

    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)

    const toggleBurger = () => {
        setBurgerMenuOpen(!BurgermenuOpen)
    }

    return (
    <div className={styles.burgerMenu}>
        <button className="navBtn" onClick={toggleBurger}><img src={burgerMenuOpen ? Lightbulb : Close} className="" width="40px"/></button>
     
</div>

)}

export default BurgerMenu