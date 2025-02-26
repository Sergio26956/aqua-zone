import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Si index.css está en la raíz de 'src'
import App from './App';  // Si App.js está en la raíz de 'src'

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Este es tu componente principal que se renderiza en el div con id 'root' */}
  </React.StrictMode>,
  document.getElementById('root')  // Este es el div en el archivo index.html donde se renderiza la app
);
