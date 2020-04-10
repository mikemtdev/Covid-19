import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Downloads from './Downloads/Downloads'
import ContactUs from './ContactUs/ContactUs'
import AboutUs from './AboutUs/AboutUs'

import './Header.css'

const Header = () => {
    return (

        <div className='Header-Container'>
            <Router>
                <ul className='navigation-list'>
                    <li>
                        <NavLink to='/'>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/downloads'>Downloads</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact_us'>Contact us </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_us'>About us</NavLink>
                    </li>
                </ul>

                {/*Routes */}

                <Route exact path='/downloads' component={Downloads} />
                <Route exact path='/contact_us' component={ContactUs} />
                <Route exact path='/about_us' component={AboutUs} />

            </Router>

        </div>
    )
}

export default Header;