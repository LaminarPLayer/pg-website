import React from 'react';
import {motion} from 'framer-motion';
import WorkElement from '../WorkElement';
import './index.css';
import PnpImg from '../../images/pnp.jpg';
import PpImg from '../../images/pp.jpg';

const Work = () => {
  const gridTransition = {
    timeConstant: 200,
    modifyTarget: target => {
      let gridWidth = Math.round(parseInt(window.getComputedStyle(document.querySelector('.work-container')).width)/3);
      if(target>gridWidth){
        return gridWidth;
      }
      if(target<(-gridWidth)){
        return -gridWidth
      }
      return Math.round(target / gridWidth) * gridWidth;
    }
  }

  const pnp = {
    img: <img src={PnpImg} alt='Pogoda na Polu' />,
    title: 'Pogoda na Polu',
    link: "https://pogodanapolu.netlify.app/",
    sourceLink: "https://github.com/LaminarPLayer/pogoda-na-polu",
    description: <p>Pogoda na Polu (polish, regional: “weather outside”) is a weather web app – also a PWA – that uses an <a href="https://openweathermap.org/api">OpenWeatherMap API</a> API and <a href="https://developers.google.com/maps/documentation/javascript/overview">Google Maps JavaScript API</a>. More description on GitHub.</p>
  }

  const pp = {
    img: <img src={PpImg} alt='Pływające Platformy' />,
    title: 'Pływające Platformy',
    link: "https://strona-platform.netlify.app/",
    sourceLink: "/",
    description: <p>XDStrona przerwana</p>
  }

  return (
    <section id='my-work'>
      <motion.div className="work-container"
        drag='x'
        dragTransition={gridTransition}
      >
        <div id="engineering" className="work-topic">
          <h2>Engineering</h2>
        </div>

        <div id="dev" className="work-topic">
          <h2>Web Development</h2>
          <p>Here are a few projects I made:</p>

          <WorkElement info={pnp} />
          <WorkElement info={pp} />
        </div>

        <div id="design" className="work-topic">
          <h2>Design</h2>
        </div>
      </motion.div>
    </section>
  )
}

export default Work
