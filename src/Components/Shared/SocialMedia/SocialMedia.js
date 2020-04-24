import React from 'react';

import Facebook from './Icons/002-facebook.svg';
import Twitter from './Icons/005-twitter-2.svg';
import Instagram from './Icons/008-instagram.svg';
import './SocialMedia.css';

const SocialMedia = () => {
	return (
		<div className='SocialMedia-container'>
			<a href='#'>
				<img src={Facebook} alt='Facebook' />
			</a>
			<a href='#'>
				<img src={Twitter} alt='Twitter' />
			</a>
			<a href='#'>
				<img src={Instagram} alt='Instagram' />
			</a>
		</div>
	);
};

export default SocialMedia;
