
import './App.css';
import ManageData from './components/ManageData';

// importando imagem com assets
import City from './assets/city.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import Destructuring from './components/Destructuring';

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
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Guido"/>
      {/* destructuring props */}
      <Destructuring brand="VW" km={10000} color="black"/>
    </div>
  );
}

export default App;
