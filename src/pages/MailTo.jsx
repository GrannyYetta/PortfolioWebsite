import { Link } from "react-router-dom"

const ButtonMailto = ({ mailto, label}) => {
    return(
        <Link to="#" onClick={(e) => {
            window.locationhref = mailto;
            e.preventDefault();
        }
        } >
            {label}
        </Link>
    )
};

export default ButtonMailto;