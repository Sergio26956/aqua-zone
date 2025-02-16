import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl">AQUAZONE</h1>
        <nav>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/water-park" className="mr-4">Parque Acuático</Link>
          <Link to="/land-water-park" className="mr-4">Parque Acuático Terrestre</Link>
          <Link to="/contact" className="mr-4">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
