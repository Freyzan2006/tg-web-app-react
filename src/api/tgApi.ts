interface TelegramWebApp {
    sendData(arg0: string): unknown;
    ready(): void;
    close(): void;

    initDataUnsafe: object;
    MainButton: IMainButton

    onEvent: (eventType :string, callback: () => void) => void
    offEvent: (eventType: string, callback: () => void) => void    
}

interface IMainButton {
    show: () => void
    hide: () => void

    isVisible: boolean

    setParams: (params: ISetParams) => void


}



interface ISetParams {
    text: string
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
    queryId?: number;
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
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: user,
        queryId: my_initDataUnsafe?.queryId
    }
}

// export default tg;