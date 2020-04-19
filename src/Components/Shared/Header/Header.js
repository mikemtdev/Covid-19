import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Downloads from './Downloads/Downloads'
import ContactUs from './ContactUs/ContactUs'
import AboutUs from './AboutUs/AboutUs'
import './menu.png'

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
                        <NavLink to='/report'>Reports</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact_us'>Contact us </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_us'>About us</NavLink>
                    </li>
                </ul>

                {/*Routes */}
                <Switch>
                    <Route exact path='/' />
                    <Route exact path='/report' component={Downloads} />
                    <Route exact path='/contact_us' component={ContactUs} />
                    <Route exact path='/about_us' component={AboutUs} />
                </Switch>
                <Redirect to = '/' />

            </Router>
            <menu />

        </div>
    )
}

export default Header;