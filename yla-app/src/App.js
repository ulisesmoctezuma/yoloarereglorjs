import './App.css';
import MiNavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return ( 
    <div className = "App">
      <MiNavBar />
      <h1 style={{paddingTop: 20}}>Desafío 2 y 3</h1>
      <ItemListContainer greeting="Hola amigos de CODERHOUSE"/>
    </div>
  );
}

export default App;