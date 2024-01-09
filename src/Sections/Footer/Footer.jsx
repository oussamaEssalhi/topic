import "./Footer.css";

import { Logo } from "../../Components/index";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Footer = () => {
    const [year, setYear] = useState("");
    useEffect(() => {
        let date = new Date();
        setYear(date.getFullYear());
    }, []);
    return (
        <div className="footer container" id="footer">
            <div className="footer-item">
                <Logo />
            </div>
            <div className="footer-item">
                <h6>Resources</h6>
                <ul>
                    <li>
                        <Link
                            to="Landing"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            {" "}
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="time-line-section"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            How it works
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=" section-freq"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={400}
                        >
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={400}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-item">
                <h6>Information</h6>
                <ul>
                    <li>305-240-9671 </li>
                    <li>info@company.com</li>
                </ul>
            </div>

            <div className="footer-item">
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        English
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="/#">
                                Arabic
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="/#">
                                Fench
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="copyright">
                    Copyright © {year} Topic Listing Center. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
