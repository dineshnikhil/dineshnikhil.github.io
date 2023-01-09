import React from 'react';
import classes from './Project.module.css';
import ProjectCard from './ProjectCard';

function Projects() {
	return (
		<div className={classes.projects_div}>
			<h2>Here we present the project of the dinesh.</h2>
			<div className={classes.project_cards_div}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}

export default Projects;
