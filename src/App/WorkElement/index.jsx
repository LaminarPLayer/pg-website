import React from 'react';
import './index.css';
import { FaGithub } from "react-icons/fa";
import {BiLinkExternal } from "react-icons/bi";

const WorkElement = ({info}) => {
  return (
    <div className='work-element'>
      <h3>{info.title}</h3>
      {info.img}
      <div className="btn-links">
        <a href={info.link}>
          <button>
            <BiLinkExternal />
          </button>
        </a>
        <a href={info.sourceLink}>
          <button>
            <FaGithub />
          </button>
        </a>
      </div>
      {info.description}
    </div>
  )
}

export default WorkElement
