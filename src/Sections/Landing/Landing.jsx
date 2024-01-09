import "./Landing.css";
import { Header } from "../index";
import { SectionHero } from "../../Components/index";

const Landing = () => {
    return (
        <div className="Landing " id="Landing">
            <Header />
            <SectionHero />
        </div>
    );
};

export default Landing;
