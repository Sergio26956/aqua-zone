import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="App-main p-6 text-white">
      <section className="hero bg-cover bg-center h-screen" style={{ backgroundImage: `url('./assets/background.jpg')` }}>
        <div className="container mx-auto h-full flex items-center justify-center">
          <h2 className="text-6xl">Explora lo Increíble</h2>
          <Link to="/water-park" className="mt-6 mr-4 px-8 py-4 bg-blue-500 text-white text-xl rounded-lg">Parque Acuático</Link>
          <Link to="/land-water-park" className="mt-6 px-8 py-4 bg-blue-500 text-white text-xl rounded-lg">Parque Acuático Terrestre</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
