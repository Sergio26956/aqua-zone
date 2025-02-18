import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FloatingPool from './pages/FloatingPool';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <FloatingPool />
  </React.StrictMode>,
  document.getElementById('root')
);
