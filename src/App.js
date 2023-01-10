import React from 'react';
import classes from './App.module.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import FunTalk from './components/funTalks/FunTalk';

import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import ProjectFullInfo from './components/projects/ProjectFullInfo';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<main className={classes.maindiv}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/funtalk" element={<FunTalk />} />
					<Route path="/projectInfo/:id" element={<ProjectFullInfo />} />
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
