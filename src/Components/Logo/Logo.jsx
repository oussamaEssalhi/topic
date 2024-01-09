import "./Logo.css";
import { BsBack } from "react-icons/bs";
import { Link } from "react-scroll";
const Logo = () => {
    return (
        <div>
            <Link
                to="Landing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="navbar-brand"
                
            >
                <BsBack />
                <span>Topic</span>
            </Link>
        </div>
    );
};

export default Logo;
