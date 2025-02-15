import React from 'react';
import './App.css'; // Importamos el archivo CSS
import logo from './assets/logo.png'; // Asegúrate de que el nombre del archivo coincida con el nombre del logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenido a AQUAZONE</h1>
      </header>
      <main className="App-main">
        <p>Contenido principal de la página</p>
      </main>
    </div>
  );
}

export default App;
