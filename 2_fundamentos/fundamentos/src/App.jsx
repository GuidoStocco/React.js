//Components
import FirstComponent from "./components/FirstComponent";
import Templete from "./components/TempleteComponents";
import Events from "./components/Events";

//styles //css
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos react</h1>
      <FirstComponent/>
      <Templete/>
      <Events/>
    </div>
  );
}

export default App;
