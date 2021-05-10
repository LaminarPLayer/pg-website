import './index.css';
import React from 'react';
import  { Route, Switch, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import Footer from './Footer';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
