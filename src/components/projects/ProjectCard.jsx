import React from 'react';
import classes from './ProjectCard.module.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard() {
	return (
		<div className={classes.project_card_div}>
			<h4>project title</h4>
			<h5>project discription</h5>
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
