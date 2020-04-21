import React, { Component } from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer-Container'>
      <div className='Footer-Item'>
        <ul className='footer-list'>
          <li>
            <a href='#'>Contact Us</a>
          </li>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Copyright 2020</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
