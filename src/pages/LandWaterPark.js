import React from 'react';
import { Link } from 'react-router-dom';

function LandWaterPark() {
  return (
    <div className="App-main p-6 text-white">
      <h2 className="text-3xl mb-6">Parque Acuático Terrestre</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/kamikaze" className="feature bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-2xl mb-2">Kamikaze</h3>
        </Link>
        <Link to="/urban-mobile" className="feature bg-white bg-opacity-10 p-6 rounded-lg">
          <h3 className="text-2xl mb-2">Parque Acuático Urbano Móvil</h3>
        </Link>
      </div>
    </div>
  );
}

export default LandWaterPark;
