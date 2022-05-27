import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Password Genorator',
			description:
				'This app helps you to make a random password by asking how many characters you want and what specific characters and letters you want.',
			technologies: [
				'HTML/CSS',
				'JavaScript',
			],
			github: 'https://github.com/Quntarious/friendly-parakeet-password-generator/tree/main/friendly-parakeet/Develop',
		},
		{
			name: 'Jest Another Rpg',
			description:
				'This is code for an rpg made in Javascript that lets you use different commands for your character You are allowed to do things like attack the enemy, use potions, and it tells you your health and the enemy health and weather you have won or lost.',
			technologies: [
				'JavaScript',
                'Jest'
			],
			github: 'https://github.com/Quntarious/jest-another-RPG/blob/main/README.md',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/Quntarious/budget-tracker',
		},
		{
			name: 'Note Taker',
			description: 'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/Quntarious/Note-Taker',
			deployed: 'https://dry-bayou-62560.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;