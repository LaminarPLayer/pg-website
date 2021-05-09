import './index.css';
import React from 'react';
import  { Route, Switch, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/">
            <Home />
            <Work />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
