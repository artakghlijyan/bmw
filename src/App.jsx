import axios from "axios";
import styles from "./App.module.css";
import Vide from "./components/vide/Vide";
import Yourbmw from "./components/yourbmw/Yourbmw";
import Yourbmw2 from "./components/yourbmw2/Yourbmw2";
import Yourbmw3 from "./components/yourbmw3/Yourbmw3";
import Yourbmw4 from "./components/yourbmw4/Yourbmw4";





function App() {
  return (
   <div>
    <Vide/>
    <Yourbmw/>
    <Yourbmw2/>
    <Yourbmw3/>
    <Yourbmw4/>
   </div>
  );
}

export default App;
