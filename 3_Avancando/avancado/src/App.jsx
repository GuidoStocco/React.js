import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';

// importando imagem com assets
import City from './assets/city.jpg'

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* image em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagens em assets */}
      <div>
    <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
    </div>
  );
}

export default App;
