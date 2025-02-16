import './index.css'; // Importar Tailwind CSS
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import FloatingPool from './pages/FloatingPool';
import FloatingBeach from './pages/FloatingBeach';
import Kamikaze from './pages/Kamikaze';
import UrbanMobile from './pages/UrbanMobile';
import WaterPark from './pages/WaterPark';
import LandWaterPark from './pages/LandWaterPark';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/floating-pool" component={FloatingPool} />
      <Route path="/floating-beach" component={FloatingBeach} />
      <Route path="/kamikaze" component={Kamikaze} />
      <Route path="/urban-mobile" component={UrbanMobile} />
      <Route path="/water-park" component={WaterPark} />
      <Route path="/land-water-park" component={LandWaterPark} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
