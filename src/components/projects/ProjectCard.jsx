import React from 'react';
import classes from './ProjectCard.module.css';
import { NavLink } from 'react-router-dom';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard(props) {
	return (
		<div className={classes.project_card_div}>
			<div className={classes.project_links_div}>
				<a href={props.obj.url} className={classes.link_button} target="_blank">
					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
				</a>
				<a
					href={props.obj.codeUrl}
					className={classes.link_button}
					target="_blank"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
			</div>
			<h3>{props.obj.name}</h3>
			<h4>{props.obj.info.slice(0, 101)}... </h4>
			<NavLink
				to={'/projectInfo/' + props.obj.id}
				className={classes.navLink_read_more}
			>
				<span className={classes.read_more_link}>Read More</span>
			</NavLink>
		</div>
	);
}

export default ProjectCard;
