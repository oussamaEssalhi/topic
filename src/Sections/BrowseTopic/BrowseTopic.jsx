import "./BrowseTopic.css";
import { SectionHeader, Taps } from "../../Components";

const BrowseTopic = (props) => {
    return (
        <div className="browse-topic" id="browse-topic">
            <SectionHeader>Browse Topics</SectionHeader>
            <Taps />
        </div>
    );
};

export default BrowseTopic;
