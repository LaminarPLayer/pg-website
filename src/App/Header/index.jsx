import React, {useEffect, useCallback, useState} from 'react';
import './index.css';
import Logo from '../Logo';
import {motion, AnimateSharedLayout } from "framer-motion";
import { BiArrowToTop } from 'react-icons/bi';

const Header = () => {
  const [scrolled, setScrolled] = useState('')

  // ON SCROLL
  const handleScroll = useCallback(e => {
    if(e.path[1].scrollY>1){
      setScrolled('scrolled')
      return
    }
    setScrolled('');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={scrolled}>
      <nav>
        <BiArrowToTop />↱↾▲△▴NAV≡≣
      </nav>
      {/* <h1><b>p</b>iotr<b>g</b>rzegorczyk</h1> */}
      <motion.ul layout>

      </motion.ul>
      <Logo />
    </header>
  )
}

export default Header
