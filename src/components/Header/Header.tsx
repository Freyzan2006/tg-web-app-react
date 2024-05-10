
import Button from "../Button/Button";
import css from "./Header.module.css";

import { tgApi } from "../../api/tgApi";
import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
    
    const { user, onClose } = tgApi();
 

    return (
        <header className = { css.header }>
            <Button onClick={onClose}>
                <IoIosArrowBack /> Выход
            </Button>
            <span className = { css.username }>
                <FaRegUserCircle /> { user?.username ? user.username : "Пользователь" }
            </span>

            <menu className = { css.menu }>
                <li><Link className = { css.menu__link } to = { "/form" }>Доставка</Link></li>
                <li><Link className = { css.menu__link } to = { "/products" }>Продукты</Link></li>
            </menu>
        </header>
    )
};

export default Header;