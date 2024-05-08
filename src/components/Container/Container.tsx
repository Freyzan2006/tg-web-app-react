
import css from "./Container.module.css";

interface IProps {
    children: React.ReactNode;
}

const Container: React.FC<IProps> = ({ children }) => {
    return (
        <div className = { css.container }>
            { children }
        </div>
    )
}

export default Container;