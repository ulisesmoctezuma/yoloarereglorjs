import React from 'react';
import './App.css';
import MiNavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd= (quantity) => {
    console.log(quantity)
  }

  return ( 
    <div className = "App">
      <MiNavBar />
      <h1 style={{paddingTop: 20}}>Desafío 5 y 6</h1>
      <ItemListContainer greeting="Hola amigos de CODERHOUSE"/>
      <ItemCount initial={1} stock={30} onAdd={onAdd}/>
    </div>
  );
}

export default App;