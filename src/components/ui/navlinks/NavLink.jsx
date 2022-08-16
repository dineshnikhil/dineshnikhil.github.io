import React from 'react'
import classes from './NavLink.module.css'

import clickSound from '../../../audio/click.wav'

function NavLink(props) {

    const clickSnd  = new Audio(clickSound);
    function playClickSound() {
        clickSnd.play();
    }

  return (
    <a href='#' className={classes.navLinks} onClick={playClickSound}>{props.linkName}</a>
  )
}

export default NavLink