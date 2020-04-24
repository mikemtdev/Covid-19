import React from 'react';

import Clock from './Landingpage/Clock/Clock';
import Topleading from './Landingpage/TopLeading/TopLeading';
import Infolinks from './Landingpage/InfoLinks/Infolinks';

const Home = () => {
	return (
		<div className='App'>
			<div className='Clock-Comp'>
				<Clock />
			</div>
			<div className='Topleading-Comp'>
				<Topleading />
			</div>
			<div className='Infor-Comp'>
				<Infolinks />
			</div>
		</div>
	);
};

export default Home;
