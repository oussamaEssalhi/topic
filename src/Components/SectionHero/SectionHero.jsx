import "./SectionHero.css";
import { BsSearch } from "react-icons/bs";
const SectionHero = () => {
    return (
        <div className="section-hero container">
            <h1>Discover. Learn. Enjoy</h1>
            <h6>platform for creatives around the world</h6>
            <div className="search">
                <div className="icon-search">
                    <BsSearch />
                </div>
                <input
                    type="search"
                    placeholder="Design, Code, Marketing, Finance ..."
                    id="search"
                    name="input-search"
                />
                <input type="submit" value="Search" />
            </div>
        </div>
    );
};

export default SectionHero;
