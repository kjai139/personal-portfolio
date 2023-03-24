import background from "./Components/Assets/images/background.jpg"
import './App.css';
import { AboutMe } from "./Components/AboutMe";
import { MyWork } from "./Components/MyWork";

function App() {
  return (
    <div className="App" style={{
      backgroundImage:`url(${background})`
    }}>
      < AboutMe />
      < MyWork />
     
    </div>
  );
}

export default App;
