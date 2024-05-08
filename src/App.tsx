
import { useEffect } from "react"
import "./App.css"

import { tgApi } from "./api/tgApi";
import Header from "./components/Header/Header";


const App = () => {
  const { tg, onToggleButton } = tgApi();

  useEffect(() => {
    tg.ready();
  }, []);

 

  return (
    <div className = "App">
        <Header />
        <button onClick = { onToggleButton }>toggle</button>
    </div>
  )
}

export default App;
