import background from "./Components/Assets/images/background.jpg"
import './App.css';
import { AboutMe } from "./Components/AboutMe";
import { MyWork } from "./Components/MyWork";
import { ContactMe } from "./Components/ContactMe";

function App() {
  return (
    <div className="App" style={{
      backgroundImage:`url(${background})`
    }}>
      < AboutMe />
      < MyWork />
      < ContactMe />
     
    </div>
  );
}

export default App;
