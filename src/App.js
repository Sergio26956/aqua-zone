import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-black bg-opacity-50 p-6">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <h1 className="text-4xl text-white mt-4">Bienvenido a AQUAZONE</h1>
      </header>
      <main className="App-main p-6 text-white">
        <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: `url('./assets/background.jpg')` }}>
          <div className="container mx-auto h-full flex items-center justify-center">
            <h2 className="text-6xl">Explora lo Increíble</h2>
          </div>
        </section>
        <section className="features py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl mb-6">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="feature bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-2xl mb-2">Rápido y Eficiente</h3>
                <p>Desarrollado con las últimas tecnologías para un rendimiento superior.</p>
              </div>
              <div className="feature bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-2xl mb-2">Diseño Moderno</h3>
                <p>Interfaz de usuario elegante y moderna que encanta a los usuarios.</p>
              </div>
              <div className="feature bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-2xl mb-2">Seguridad</h3>
                <p>Implementamos las mejores prácticas para mantener tus datos seguros.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
