
import { useEffect } from "react"
import "./App.css"

import { tgApi } from "./api/tgApi";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";


const App: React.FC = () => {
  const { tg, onToggleButton } = tgApi();

  useEffect(() => {
    tg.ready();
  }, []);

 

  return (
    <div className = "App">
        <Header />
        <button onClick = { onToggleButton }>toggle</button>
        <Link to = { "/form" }>Form</Link>
        <Link to = { "/products" }>Products</Link>
    </div>
  )
}

export default App;
