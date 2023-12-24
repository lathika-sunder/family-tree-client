import React from 'react';
import './HeaderComp.css';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const HeaderComp = () => {
  return (
    <div className="header">
      <div className="heading">
        <h1>The Raj Family</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <Link to='/'><Button variant="text">Overview</Button></Link>
            <Link to='/family-tree'><Button variant="outlined">Family Tree</Button></Link>
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComp;
