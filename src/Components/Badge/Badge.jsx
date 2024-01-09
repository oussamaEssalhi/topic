
import "./Badge.css";

const Badge = (props) => {
    return <div className="badge">{props.children}</div>;
};
const BadgeBleu = (props) => {
    return <div className="badge-bleu">{props.children}</div>;
};

export default Badge;
export { BadgeBleu };
