import React from 'react';
import classes from './App.module.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import FunTalk from './components/funTalks/FunTalk'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main className={classes.maindiv}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/funtalk" element={<FunTalk />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
