import React, {useEffect, useCallback, useState} from 'react';
import './index.css';
import Logo from '../Logo';
// import {motion} from "framer-motion";

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
      <div className='side left-side'>
        still in <br /> development
      </div>
      <div className='side right-side'>
        looks best<br />on mobile
      </div>

      <Logo />
    </header>
  )
}

export default Header
