
import Button from "../Button/Button";
import css from "./Header.module.css";

import { tgApi } from "../../api/tgApi";



const Header: React.FC = () => {
    
    const { user, onClose } = tgApi();
 

    return (
        <header className = { css.header }>
            <Button onClick={onClose}>
                Закрыть
            </Button>
            <span className = { css.username }>
                { user?.username }
            </span>
        </header>
    )
};

export default Header;