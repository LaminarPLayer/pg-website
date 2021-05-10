import React, {useEffect, useCallback, useState} from 'react';
import './index.css';
import Logo from '../Logo';
import {motion} from "framer-motion";

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
        (strona nadal w budowie)
      </nav>
      <motion.ul layout>

      </motion.ul>
      <Logo />
    </header>
  )
}

export default Header
