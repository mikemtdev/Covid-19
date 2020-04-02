import React, { Component } from 'react';

import './Header.css'

const Header = () => {
    return (
        <div className = 'Header-Container'>
            <ul className = 'navigation-list'>
                <li>
                    <a href='#'>Home</a>
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

        </div>
    )
}

export default Header;