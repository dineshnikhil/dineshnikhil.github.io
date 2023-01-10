import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../store/Projects/ProjectsData';
import classes from './ProjectFullInfo.module.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectFullInfo() {
	var param = useParams();
	return (
		<div className={classes.project_info_div}>
			<h1>{projectsData[param.id - 1].name}</h1>
            <div className={classes.action_btns_div}>
            <button>
				visit site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</button>
			<button>
				view code <FontAwesomeIcon icon={faGithub} />
			</button>
            </div>
			<p>{projectsData[param.id - 1].info}</p>
		</div>
	);
}

export default ProjectFullInfo;
