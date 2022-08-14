import React from 'react';
import classes from './App.module.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main className={classes.maindiv}>
        <Home />
        <About />
      </main>
    </React.Fragment>
  );
}

export default App;
