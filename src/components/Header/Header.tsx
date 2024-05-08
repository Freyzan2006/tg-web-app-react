
import Button from "../Button/Button";
import css from "./Header.module.css";

import tg from "../../api/tgApi";

interface User {
    username?: string;
    // Другие свойства пользователя, если они есть
}
  
  // Определяем интерфейс для initDataUnsafe
interface InitDataUnsafe {
    user?: User;
// Другие свойства initDataUnsafe, если они есть
}
  
  // Определяем тип данных для tg
interface Tg {
    initDataUnsafe?: InitDataUnsafe;
}

const Header: React.FC = () => {
    const onClose = () => {
        tg.close();
    }

    const my_initDataUnsafe: InitDataUnsafe  | undefined = tg.initDataUnsafe;
    const my_user: User | undefined = my_initDataUnsafe?.user;
    const my_username: string | undefined = my_user?.username || "No Username"

    return (
        <header className = { css.header }>
            <Button onClick={onClose}>
                Закрыть
            </Button>
            <span className = { css.username }>
                { my_username }
            </span>
        </header>
    )
};

export default Header;