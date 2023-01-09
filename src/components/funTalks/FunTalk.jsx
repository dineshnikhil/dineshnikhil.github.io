import React from 'react'
import PosterCard from '../ui/posterCard/PosterCard'
import classes from './FunTalk.module.css'

function FunTalk() {
  return (
    <div className={classes.funtalk_div}>
        <h1>Topics we talk about here. i have changed successfully.</h1>
        <h3 className={classes.talk_link}>Anime Stuff 😶‍🌫️</h3>
        <h3 className={classes.talk_link}>Trending Tech Stuff 🖥️</h3>
        <h3 className={classes.talk_link}>General Talk Stuff 👀</h3>

        <div>
            <h2>Anime Stuff 😶‍🌫️</h2>
            <PosterCard />
        </div>
        <div>
            <h2>Trending Tech Stuff 🖥️</h2>
        </div>
        <div>
            <h2>General Talk Stuff 👀</h2>
        </div>
    </div>
  )
}

export default FunTalk