import css from "./Button.module.css";

interface IProps {
    className?: string
    onClick: () => void
    children: React.ReactNode | undefined;
}

const Button: React.FC<IProps> = ( props ) => {
    return (
        <button { ...props } className = { css.button + " " + props.className }>
            { props.children }
        </button>
            
        
    )
}

export default Button;