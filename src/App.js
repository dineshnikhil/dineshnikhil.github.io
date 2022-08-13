import React from 'react';
import classes from './App.module.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main className={classes.maindiv}>
        <Home />
      </main>
    </React.Fragment>
  );
}

export default App;
