import React from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './menu.png';

import './Header.css';

const Header = () => {
	// const Toggle = () => {
	// 	style ={{Display}}
	// };
	return (
		<div className='Header-Container'>
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
			{/* <img src={Menu} onClick={Toggle} /> */}
		</div>
	);
};

export default Header;
