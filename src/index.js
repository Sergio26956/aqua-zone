import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';  // Ruta correcta si 'index.css' está en la subcarpeta 'styles'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Aquí se renderiza tu aplicación en el div con id 'root'
);
