import React, { Component } from 'react';
import './Infolinks.css';

const Infolinks = () => {
	const linkArrays = [
		{
			linkName: 'What is Covid-19?',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#',
		},
		{
			linkName: 'Mythbusters',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters',
		},
		{
			linkName: 'What ae the symptoms of Covid-19?',
			mythbusters:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#',
		},
		{
			linkName: 'How is it spreade?',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#',
		},
		{
			linkName: 'How Long does it take for the sypmtom to develop?',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#',
		},
		{
			linkName: 'Situation Report',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/',
		},
		{
			linkName: 'Stratates and plans ',
			url:
				'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/strategies-plans-and-operations',
		},
	];
	return (
		<div className='infolinks-Container'>
			<div className='infolinks-item'>
				<ul className='infolinks-list'>
					{linkArrays.map((link) => (
						<li>
							<a href={link.url}>{link.linkName}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Infolinks;
