import React from 'react';
import './index.css';
import { FaGithub } from "react-icons/fa";
import {BiLinkExternal } from "react-icons/bi";

const WorkElement = ({info}) => {
  return (
    <div className='work-element'>
      <h3>{info.title}</h3>
      <h4>{info.date}</h4>
      {info.img}
      <div className={info.sourceLink !== undefined  ? "btn-links" : "btn-links no-git"}>
        <a href={info.link}>
          <button>
            <BiLinkExternal />
          </button>
        </a>
        {info.sourceLink !== undefined  ? <a href={info.sourceLink}>
          <button>
            <FaGithub />
          </button>
        </a> : ''}
      </div>
      {info.description}
    </div>
  )
}

export default WorkElement
