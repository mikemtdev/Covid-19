import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<div className='Footer-Container'>
			<div className='Footer-Item'>
				<ul className='footer-list'>
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
			</div>
		</div>
	);
};

export default Footer;
