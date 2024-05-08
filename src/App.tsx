
import { useEffect } from "react"
import "./App.css"

import { tgApi } from "./api/tgApi";


const App = () => {
  const { tg, onToggleButton } = tgApi();

  useEffect(() => {
    tg.ready();
  }, []);

 

  return (
    <div className = "App">
        <button onClick = { onToggleButton }>toggle</button>
    </div>
  )
}

export default App;
