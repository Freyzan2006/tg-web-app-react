interface TelegramWebApp {
    ready(): void;
    close(): void;

    initDataUnsafe: object;
    
}
  
declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}



  
const tg: TelegramWebApp  = window.Telegram.WebApp;

export default tg;