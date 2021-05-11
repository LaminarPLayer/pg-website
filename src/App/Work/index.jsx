import React from 'react';
import {motion} from 'framer-motion';
import WorkElement from '../WorkElement';
import './index.css';
import PnpImg from '../../images/pnp.jpg';
import PpImg from '../../images/pp.jpg';
import PgwImg from '../../images/pgw.jpg';

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
    description: <p>Pogoda na Polu (polish, regional: “weather outside”) is a weather web app – also a PWA – that uses an <a href="https://openweathermap.org/api">OpenWeatherMap API</a> API and <a href="https://developers.google.com/maps/documentation/javascript/overview">Google Maps JavaScript API</a>. Built with HTML, CSS (SASS), custom animated SVGs and vanilla JavaScript. More description on GitHub.</p>
  }

  const pp = {
    img: <img src={PpImg} alt='Pływające Platformy' />,
    title: 'Pływające Platformy',
    link: "https://strona-platform.netlify.app/",
    // sourceLink: "/",
    description: <p>A website for a company manufacturing platforms floating on the water. Due to change of company needs the website had not been finished. Built with HTML, CSS and vanilla JavaScript. The animated logo was created using Figma and some code-based SVG modifications.</p>
  }

  const pgw = {
    img: <img src={PgwImg} alt='This website' />,
    title: 'This website itself',
    link: "/",
    sourceLink: "https://github.com/LaminarPLayer/pg-website",
    description: <p>This website was built with React (create-react-app). Yet, still, in development the website can uses some basic React concepts – JSX, functional components with basic hooks and an awesome <a href="https://www.framer.com/motion/">Framer Motion</a> library. The website will be improved week after week.</p>
  }

  return (
    <>
      <h2 id='my-works'>My works</h2>
      <p>Here are a few projects I made:</p>
      <section id='my-work'>
        <motion.div className="work-container"
          drag='x'
          dragTransition={gridTransition}
        >
          <div id="engineering" className="work-topic">
            <WorkElement info={pgw} />
          </div>

          <div id="dev" className="work-topic">
            <WorkElement info={pnp} />
          </div>

          <div id="design" className="work-topic">
            <WorkElement info={pp} />
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Work
