import Lightbulb from '../../assets/noun-light-bulb-1916019.svg'

const Logo = () => {
    return (
        <div>
            <a href="/" className="nav-logo">
                <img src={Lightbulb} alt="lightbulb" className="logo" />
            </a>
        </div>
    )
}

export default Logo