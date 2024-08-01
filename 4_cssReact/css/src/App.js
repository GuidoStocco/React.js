import MyComponents from "./components/MyComponents";



function App() {
  const redTitle = true;
  return (
    <div className="App">
      <h1>CSS REACT</h1>
      {/* css de componente */}
      <MyComponents/>
      {/* Classe dinâmica no css */}
      <h2 className={redTitle ? "red-title" : "title"}>classe dinâmica no css</h2>
      {/* CSS Module */}
      
    </div>
  );
}

export default App;
