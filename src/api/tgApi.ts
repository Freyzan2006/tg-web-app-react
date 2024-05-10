interface TelegramWebApp {
    sendData(arg0: string): unknown;
    ready(): void;
    close(): void;

    initDataUnsafe: object;
    MainButton: IMainButton

    onEvent: (eventType :string, callback: () => void) => void
    offEvent: (eventType: string, callback: () => void) => void    
    expand: () => void
}

interface IMainButton {
    show: () => void
    hide: () => void

    isVisible: boolean
    textColor: string
    color: string

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
}
  

interface InitDataUnsafe {
    user?: User;
    queryId?: number;
}
  
 

const tg: TelegramWebApp = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#ffffff";
tg.MainButton.color = "#2cad37";

export function tgApi() {
    
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

