import React from 'react';
import './index.css';
import {motion} from 'framer-motion'

const Home = () => {
  const home = {
    // hidden: {},
    show: {
      transition: {
        staggerChildren: .05
      }
    }
  }
  const homeElements = {
    hidden: {y: '3rem', opacity: 0},
    show: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section
      id="home"
      variants={home}
      initial='hidden'
      animate='show'
    >
      <motion.h2 variants={homeElements}>My name is</motion.h2>
      <motion.h1 variants={homeElements}>Piotr Grzegorczyk</motion.h1>
      <motion.h2 variants={homeElements}>and I make <span className="accent">websites</span>.</motion.h2>
      <motion.p variants={homeElements}>
        I'm a front-end developer.
      </motion.p>
      <motion.button
        variants={homeElements}
      >
        MY WORK
      </motion.button>
    </motion.section>
  )
}

export default Home
