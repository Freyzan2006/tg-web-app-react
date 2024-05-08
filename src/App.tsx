
import { useEffect } from "react"
import "./App.css"

interface TelegramWebApp {
  ready(): void;
  close(): void;
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }
}

// const tg = window.Telegram.WebApp
const tg: TelegramWebApp  = window.Telegram.WebApp;


const App = () => {

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  }

  return (
    <div className = "App">
      <button onClick = { onClose }>Закрыть</button>
    </div>
  )
}

export default App;
