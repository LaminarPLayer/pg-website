import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './index.css';

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
          <div className="work-element">
            <h3>Pogoda na Polu</h3>
            <p>linki</p>
            <p>opis</p>
          </div>
        </div>
        <div id="design" className="work-topic">
          <h2>Design</h2>
        </div>
      </motion.div>
    </section>
  )
}

export default Work
