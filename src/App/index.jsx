import './index.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
