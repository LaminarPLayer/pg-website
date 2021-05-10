import React, {useState, useEffect, useCallback} from 'react'
import './index.css'
import {motion} from 'framer-motion'

const Logo = () => {
  const [eye1Pos, setEye1Pos] = useState([0,0]);
  const [eye2Pos, setEye2Pos] = useState([0,0]);
  
  const [smile, setSmile] = useState(1);

  // ON MOUSE MOVE
  const handleMouseMove = useCallback(e => {
    let x, y;
    if(e.type==='mousemove'){
      x=e.x;
      y=e.y;
    }
    if(e.type==='touchstart' || e.type === 'touchend'){
      x=e.changedTouches[0].clientX;
      y=e.changedTouches[0].clientY;
    }
    let rem2px = parseInt(getComputedStyle(document.documentElement).fontSize);
    let windowW = window.innerWidth;
    let relativeX1 = x-windowW/2+.904*rem2px;
    let relativeX2 = x-windowW/2-.904*rem2px;
    let relativeY = y-1.96*rem2px;
    let angle1 = Math.atan2(relativeY,relativeX1);
    let angle2 = Math.atan2(relativeY,relativeX2);
    let dist1 = Math.min(Math.sqrt(relativeX1*relativeX1+relativeY*relativeY)/2,.3*rem2px)
    let dist2 = Math.min(Math.sqrt(relativeX2*relativeX2+relativeY*relativeY)/2,.3*rem2px)
    setEye1Pos([
      Math.cos(angle1)*dist1,
      Math.sin(angle1)*dist1
    ])
    setEye2Pos([
      Math.cos(angle2)*dist2,
      Math.sin(angle2)*dist2
    ])
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);
    window.addEventListener('touchend', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      window.removeEventListener('touchend', handleMouseMove);
    };
  }, [handleMouseMove]);

  // ON MOUSE CLICK
  const handleMouseDown = useCallback(e => {
    e.type==='mousedown' ? setSmile(false) : setSmile(true);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseDown);
    };
  }, [handleMouseDown]);

  return (
    <div id="logo-container">
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="logo">
        <ellipse id="Ellipse 11" cx="13.0934" cy="18.8568" rx="9.27507" ry="8.35837" fill="#fff"/>
        <ellipse id="Ellipse 12" cx="40.1927" cy="18.8568" rx="9.27507" ry="8.35837" fill="#fff"/>
        <rect width="54" height="54" fill="transparent"/>
        <motion.circle id="eye-1" cx="12.5419" cy="18.8568" r="3.025" fill="#0B172C"
          animate={{
            translateX: `${eye1Pos[0]}px`,
            translateY: `${eye1Pos[1]}px`
          }}
        />
        <motion.circle id="eye-2" cx="41.4549" cy="18.8568" r="3.025" fill="#0B172C"
          animate={{
            translateX: `${eye2Pos[0]}px`,
            translateY: `${eye2Pos[1]}px`
          }}
        />
        <g id="pg">
        <path d="M6.20869 41.2701H0.16069L0.16069 6.97498H6.20869V10.431H7.07269C7.71269 9.11898 8.64069 8.11098 9.85669 7.40698C11.0727 6.67098 12.6247 6.30298 14.5127 6.30298C15.9207 6.30298 17.2487 6.57498 18.4967 7.11898C19.7767 7.66298 20.8807 8.46298 21.8087 9.51898C22.7687 10.543 23.5207 11.807 24.0647 13.311C24.6407 14.815 24.9287 16.527 24.9287 18.447V19.311C24.9287 21.263 24.6567 22.991 24.1127 24.495C23.5687 25.999 22.8327 27.279 21.9047 28.335C20.9767 29.359 19.8727 30.143 18.5927 30.687C17.3447 31.199 15.9847 31.455 14.5127 31.455C13.4247 31.455 12.4807 31.343 11.6807 31.119C10.8807 30.895 10.1767 30.591 9.56869 30.207C8.99269 29.823 8.49669 29.391 8.08069 28.911C7.69669 28.399 7.36069 27.871 7.07269 27.327H6.20869V41.2701ZM12.5447 25.695C14.4327 25.695 15.9527 25.119 17.1047 23.967C18.2887 22.783 18.8807 21.183 18.8807 19.167V18.591C18.8807 16.575 18.2887 14.991 17.1047 13.839C15.9527 12.655 14.4327 12.063 12.5447 12.063C10.6567 12.063 9.12069 12.671 7.93669 13.887C6.78469 15.071 6.20869 16.639 6.20869 18.591V19.167C6.20869 21.119 6.78469 22.703 7.93669 23.919C9.12069 25.103 10.6567 25.695 12.5447 25.695Z" fill="#f84825"/>
        <path d="M47.7913 27.327H46.9273C46.6713 27.871 46.3513 28.399 45.9673 28.911C45.6153 29.391 45.1353 29.823 44.5273 30.207C43.9513 30.591 43.2473 30.895 42.4153 31.119C41.6153 31.343 40.6393 31.455 39.4873 31.455C38.0153 31.455 36.6393 31.199 35.3593 30.687C34.1113 30.143 33.0073 29.359 32.0473 28.335C31.1193 27.279 30.3833 25.999 29.8393 24.495C29.3273 22.991 29.0713 21.263 29.0713 19.311V18.447C29.0713 16.527 29.3433 14.815 29.8873 13.311C30.4633 11.807 31.2313 10.543 32.1913 9.51898C33.1833 8.46298 34.3193 7.66298 35.5993 7.11898C36.9113 6.57498 38.2873 6.30298 39.7273 6.30298C41.6473 6.30298 43.1673 6.67098 44.2873 7.40698C45.4073 8.11098 46.2873 9.11898 46.9273 10.431H47.7913V6.97498H53.8393C53.8393 6.97498 53.8393 40.1791 53.8393 41.2671C53.1643 41.2701 52.7519 41.2701 51.9578 41.2671C51.1637 41.2642 51.2313 41.2701 50.1433 41.2701H32.5222V35.5101H46.4953C47.3593 35.5101 47.4453 35.5071 47.7913 35.5071V27.327ZM41.4553 25.695C43.3433 25.695 44.8633 25.103 46.0153 23.919C47.1993 22.703 47.7913 21.119 47.7913 19.167V18.591C47.7913 16.639 47.1993 15.071 46.0153 13.887C44.8633 12.671 43.3433 12.063 41.4553 12.063C39.5673 12.063 38.0313 12.655 36.8473 13.839C35.6953 14.991 35.1193 16.575 35.1193 18.591V19.167C35.1193 21.183 35.6953 22.783 36.8473 23.967C38.0313 25.119 39.5673 25.695 41.4553 25.695Z" fill="#f84825"/>
        </g>
        <motion.path initial={{pathLength:1}} animate={{pathLength: smile ? 1 : 0, pathOffset: smile ? 0 : .7}} transition={{duration:.1}} id="Ellipse 10" d="M39.1111 48.3459C34.3278 49.1893 29.4002 48.4968 25.0346 46.3676C20.6691 44.2384 17.0897 40.7817 14.8094 36.4932" stroke="#f84825" strokeWidth="6"/>
        <motion.circle animate={{opacity: smile ? 0 : 1}} transition={{duration:.1}} id="o-mouth" cx="21.0934" cy="43.5292" r="8" fill="#F84825"/>
        </g>
      </svg>
    </div>
  )
}

export default Logo