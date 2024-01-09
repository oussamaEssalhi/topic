import "./Container.css";

const Container = (props) => {
    return <div className="container-md">{props.children}</div>;
};

export default Container;
