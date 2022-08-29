import React from 'react'
import naruto from '../../../images/anime/naruto.webp'
import classes from './PosterCard.module.css'

function PosterCard() {
  return (
    <div className={classes.poster_card}>
        <img src={naruto} alt="Naruto anime poster"/>
        <h3>film title</h3>
        <button>watchNow</button>
    </div>
  )
}

export default PosterCard