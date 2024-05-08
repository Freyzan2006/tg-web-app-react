
import { useEffect } from "react"
import "./App.css"

import tg from "./api/tgApi";


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
