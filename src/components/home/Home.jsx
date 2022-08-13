import React from 'react'
import myPic from '../../images/meraPic-min.jpg'
import classes from './Home.module.css'

function Home() {
  return (
    <div className={classes.home}>
        <div className={classes.homeDiv}>
            <div className={classes.homeImageDiv}>
                <img src={myPic} alt="my pic" />
            </div>
            <div className={classes.homeTitleDiv}>
                <h1>Dinesh</h1>
                <h2>dineshNikhil</h2>
            </div>
        </div>
        <div className={classes.quoteDiv}>
            <h1>Brings ideas to life with code.</h1>
            <h2>Web Developer. Googler. Content Creator. Whimsical Specialist. International Speaker.</h2>
        </div>
    </div>
    
  )
}

export default Home