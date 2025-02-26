import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambié esto
import './styles/index.css';
import App from './App';

// Crear un root para la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente <App />
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
