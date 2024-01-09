import "./TimeLineSection.css";
import {
    SectionHeader,
    Container,
    ButtonTransparent,
} from "../../Components/index";

import { FiSearch } from "react-icons/fi";
import { BsBook, BsBookmarks } from "react-icons/bs";

const TimeLineSection = () => {
    // const section = useRef();
    // window.addEventListener("scroll", () => {
    //     const winScrollTop = document.documentElement.scrollTop;
    //     const TopSection = section.current?.offsetTop;
    //     console.log(winScrollTop);
    //     if (winScrollTop-TopSection > TopSection) {
    //         console.log(winScrollTop);
    //         setClass("icone-holder active");
    //     } else {
    //         setClass("icone-holder");
    //     }
    // });

    return (
        <div className="time-line-section" id="time-line-section">
            <Container>
                <SectionHeader>How does it work?</SectionHeader>
                <div className="timeline-container">
                    <ul>
                        <li>
                            <h4>Search your favourite topic</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis, cumque magnam?
                                Sequi, cupiditate quibusdam alias illum sed esse
                                ad dignissimos libero sunt, quisquam numquam
                                aliquam? Voluptas, accusamus omnis?
                            </p>
                            <div className="icone-holder">
                                <FiSearch />
                            </div>
                        </li>
                        <li>
                            <h4>Bookmark & Keep it for yourself</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis, cumque magnam?
                                Sequi, cupiditate quibusdam alias illum sed esse
                                ad dignissimos libero sunt, quisquam numquam
                                aliquam? Voluptas, accusamus omnis?
                            </p>
                            <div className="icone-holder">
                                <BsBookmarks />
                            </div>
                        </li>
                        <li>
                            <h4>Read & Enjoy</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Reiciendis, cumque magnam?
                                Sequi, cupiditate quibusdam alias illum sed esse
                                ad dignissimos libero sunt, quisquam numquam
                                aliquam? Voluptas, accusamus omnis?
                            </p>
                            <div className="icone-holder">
                                <BsBook />
                            </div>
                        </li>
                    </ul>
                    <div className="timeline-footer">
                        <p>Want to learn more ? </p>
                        <ButtonTransparent>Check out Youtube</ButtonTransparent>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TimeLineSection;
