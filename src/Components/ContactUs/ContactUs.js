import React, { Component } from 'react';

import SocialMedia from '../Shared/SocialMedia/SocialMedia';
import './Contactus.css';

const ContactUs = () => {
	return (
		<div className='Contact-Comp'>
			<h1>Constact us</h1>
			<form className='send-form'>
				<SocialMedia />
				<p>Mikemnjovu@gmail.com</p>
				<p>
					<i> or </i>
				</p>
				<input
					type='email'
					className='form-input'
					placeholder='Send us your Email'
				/>

				<button className='send-btn'>Send</button>
			</form>
		</div>
	);
};

export default ContactUs;
