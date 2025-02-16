import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import music from '../public/background-music.mp3';

function App() {
  useEffect(() => {
    const audio = new Audio(music);
    audio.play();
    return () => audio.pause();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
