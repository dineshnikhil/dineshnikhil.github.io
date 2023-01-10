import React from 'react';
import classes from './ProjectCard.module.css';
import { NavLink } from 'react-router-dom';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard(props) {
	return (
		<div className={classes.project_card_div}>
			<h3>{props.obj.name}</h3>
			<h4>
				{props.obj.info.slice(0, 101)}...{' '}
				<NavLink
					to={'/projectInfo/' + props.obj.id}
					className={classes.navLink_read_more}
				>
					<span className={classes.read_more_link}>Read More</span>
				</NavLink>
			</h4>
			<button>
				visit site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</button>
			<button>
				view code <FontAwesomeIcon icon={faGithub} />
			</button>
		</div>
	);
}

export default ProjectCard;
