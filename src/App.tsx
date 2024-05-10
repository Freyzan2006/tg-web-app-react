
import { useEffect } from "react"
import "./App.css"

import { tgApi } from "./api/tgApi";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";




const App: React.FC = () => {
  const { tg } = tgApi();

  useEffect(() => {
    tg.ready();
  }, []);

 

  return (
    <div className = "App">
        <Container>
          <Header />
        </Container>
    </div>
  )
}

export default App;
