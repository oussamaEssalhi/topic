import "./button.css";

const Button = (props) => {
    return (
        <div className="button-pramary">
            <a href={props.link}>{props.children}</a>
        </div>
    );
};
const ButtonTransparent = (props) => {
    return (
        <div className="button-transpa">
            <a href={props.link}>{props.children}</a>
        </div>
    );
};

export default Button;
export { ButtonTransparent };
