import "./LandingBottom.css";
import image1 from "../../assets/images/topics/undraw_Remote_design_team_re_urdx.png";
import { Button, Badge } from "../../Components/index";
import {
    PiTwitterLogoThin,
    PiPinterestLogoFill,
    PiFacebookLogoBold,
    PiBookmarksSimpleBold,
} from "react-icons/pi";

const LandingBottom = () => {
    return (
        <div className="landing-bottom" id="landing-bottom">
            <div className="cards container">
                <div className="left-card" data-aos="fade-right">
                    <div className="left-card-content">
                        <h5>Web Design</h5>
                        <p>
                            When you search for free CSS templates, you will
                            notice that TemplateMo is one of the best websites.
                        </p>
                        <img src={image1} alt="" />
                    </div>
                    <Badge>10</Badge>
                </div>
                <div className="right-card" data-aos="fade-left">
                    <div className="card-right-content">
                        <div>
                            <h5>Finance</h5>
                            <p>
                                Topic Listing Template includes homepage,
                                listing page, detail page, and contact page. You
                                can feel free to edit and adapt for your CMS
                                requirements.
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div className="social-share">
                            <div>Share:</div>
                            <div>
                                <ul>
                                    <li>
                                        <PiFacebookLogoBold />
                                    </li>
                                    <li>
                                        <PiTwitterLogoThin />
                                    </li>
                                    <li>
                                        <PiPinterestLogoFill />
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <PiBookmarksSimpleBold />
                            </div>
                        </div>
                    </div>
                    <Badge>100</Badge>
                </div>
            </div>
        </div>
    );
};

export default LandingBottom;
