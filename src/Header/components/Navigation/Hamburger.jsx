import List from '../../../assets/list.svg'
import Close from '../../../assets/x-lg.svg'


const Hamburger = () => {

    return

    {/* hamburger menu attempt starts */}

      {/* The toggle button for opening and closing the navigation menu */}
      <label htmlFor="toggle" className="nav-toggle">
        {/* An icon representing the hamburger menu */}
        <img src={List} alt="hamburger-menu" className="foo-bar" />

                {/* An icon representing the close button */}
                <img src={Close} alt="close" className="foo-exit" />
      </label>

{/* hamburger menu attempt ends */}

}

export default Hamburger