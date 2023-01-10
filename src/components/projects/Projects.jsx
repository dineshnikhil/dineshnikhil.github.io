import React from 'react';
import classes from './Project.module.css';
import ProjectCard from './ProjectCard';

import projectsData from '../../store/Projects/ProjectsData';

function Projects() {
	var projects_array = [
		{
			name: 'covid tracker',
			description: 'project 1 description',
		},
		{
			name: 'crypto tracker',
			description: 'project 2 description',
		},
		{
			name: 'project3',
			description: 'project 3 description',
		},
		{
			name: 'project4',
			description: 'project 4 description',
		},
		{
			name: 'project Fiziya',
			description: 'done by baby fiziya.',
		},
		{
			name: 'project Fiziya',
			description: 'done by baby fiziya.',
		},
	];
	return (
		<div className={classes.projects_div}>
			<h2>Here we present the project of the dinesh.</h2>
			<div className={classes.project_cards_div}>
				{projectsData.map((obj) => {
					return <ProjectCard obj={obj} />;
				})}
			</div>
		</div>
	);
}

export default Projects;
