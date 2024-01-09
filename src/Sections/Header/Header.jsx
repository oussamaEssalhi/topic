import { useState } from "react";
import "./Header.css";

import { Logo } from "../../Components/index";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-scroll";
import { useEffect } from "react";
// add animation library ASO
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect((e) => {
        Aos.init({
            duration: 1000,
            easing: "linear",
            passive: false,
        });
    }, []);
    const [className, setClassname] = useState("header");
    const scrolling = () => {
        window.onscroll = () => {
            
            if (document.documentElement.scrollTop > 1) {
                setClassname("scroll");
            } else {
                setClassname("header");
            }
           
        };
        return false;
         
    };
    scrolling();
    return (
        <div className={className} id="header" data-aos="fade-down">
            <nav className="navbar  container navbar-expand-lg ">
                <div className="container-fluid ">
                    <Logo />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <Link
                                    to="Landing"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    className="nav-link "
                                    aria-current="page"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="browse-topic"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration={500}
                                    className="nav-link"
                                >
                                    BROWSER TOPICS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="time-line-section"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    className="nav-link"
                                >
                                    HOW IT WORKS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="section-freq"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    className="nav-link"
                                >
                                    FAQS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={10}
                                    duration={100}
                                    className="nav-link"
                                >
                                    CONTACT
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    PAGES
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            Footer
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="nav-item user">
                            <div>
                                <HiOutlineUser />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
