interface TelegramWebApp {
    ready(): void;
    close(): void;

    initDataUnsafe: object;
    MainButton: IMainButton
    
}

interface IMainButton {
    show: () => void
    isVisible: boolean
}
  
declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}


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
// interface Tg {
//     initDataUnsafe?: InitDataUnsafe;
// }

  
// const tg: TelegramWebApp  = window.Telegram.WebApp;

// const my_initDataUnsafe: InitDataUnsafe  | undefined = tg.initDataUnsafe;
// const my_user: User | undefined = my_initDataUnsafe?.user;
// const my_username: string | undefined = my_user?.username || "No Username"

export function tgApi() {
    const tg: TelegramWebApp = window.Telegram.WebApp;
    const my_initDataUnsafe: InitDataUnsafe | undefined = tg.initDataUnsafe;
    const user: User | undefined = my_initDataUnsafe.user;

    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.show();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: user
    }
}

// export default tg;