import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        
        <div className = 'Header-Container'>
        <Router>
            <ul className = 'navigation-list'>
                <li>
                    <NavLink to = '/'>Home </NavLink>
                </li>
                <li>
                    <a href='#'>Downloads</a>
                </li>
                <li>
                    <a href='#'>Contact us </a>
                </li>
                <li>
                    <a href='#'>About us</a>
                </li>
            </ul>
            </Router>
    
        </div>
    )
}

export default Header;