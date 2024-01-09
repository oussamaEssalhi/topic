import { BadgeBleu } from "../Badge/Badge";
import "./CardeItem.css";

const CardeItem = (props) => {
    return (
        <div className="carde-item">
            <div className="head-card">
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.content}</p>
                </div>
                <BadgeBleu>{props.badgeNumber}</BadgeBleu>
            </div>
            <div className="image">
                <img src={props.image} alt="" />
            </div>
        </div>
    );
};

export default CardeItem;
