import React from 'react';
import './HeaderComp.css';
import {Button} from '@mui/material'
const HeaderComp = () => {
  return (
    <div className="header">
      <div className="heading">
        <h1>The Raj Family</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li><Button variant="text"><a href="#home">Overview</a></Button></li>
            <li><Button variant="outlined"><a href="#home">Members</a></Button></li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComp;
