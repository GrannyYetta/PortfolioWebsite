import Lightbulb from '../../../assets/noun-light-bulb-1916019.svg'
import Close from '../../../assets/x-lg.svg'
import { useState } from 'react'
import styles from '../../styling/Header.module.css'

const Hamburger = () => {

  console.log(Lightbulb)

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
    <div className={styles.burgerMenu}>
        <img src={Lightbulb} className="" width="40px"/>
        <img src={Close} alt="close" style={{display: "none"}} className="foo-exit" />
     
</div>

)}

export default Hamburger