// css
import './App.css';

// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

//components
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          {/* no match route */}
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
