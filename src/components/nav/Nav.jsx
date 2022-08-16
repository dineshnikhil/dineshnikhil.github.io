import React from 'react'
import { useState } from 'react'
import classes from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import clickSound from '../../audio/click.wav'
import soundOn from '../../audio/soundOn.wav'
import soundOff from '../../audio/soundOff.wav'
import NavLink from '../ui/navlinks/NavLink'

function Nav() {

  const [icon, setIcon] = useState(faSun);
  const [speakerIcon, setSpeakerIcon] = useState(faVolumeHigh);
  const [mode, setMode] = useState(true);
  const [muted, setMuted] = useState(false);

  const clickSnd = new Audio(clickSound)
  const soundOnSnd = new Audio(soundOn)
  const soundOffSnd = new Audio(soundOff)

  function startSound() {
    if(muted) {
      clickSnd.played();
    } else {
      clickSnd.play();
    }
  }

  function soundOnHandler() {
    soundOnSnd.play();
  }

  function soundOffHandler() {
    soundOffSnd.play();
  }

  function modeChangeHandler() {
    if(mode) {
      startSound();
      document.documentElement.setAttribute('data-theme', 'light');
      setIcon(faMoon);
      setMode(false)
    } else {
      startSound();
      document.documentElement.setAttribute('data-theme', 'dark');
      setIcon(faSun);
      setMode(true)
    }
  }

  function muteHandler() {
    if(muted) {
      setMuted(false);
      setSpeakerIcon(faVolumeHigh);
      soundOnHandler()
    } else {
      setMuted(true);
      setSpeakerIcon(faVolumeMute);
      soundOffHandler()
    }
  }

  return (
    <nav>
        <div className={classes.navLinks}>
            <NavLink linkName="Home" />
            <NavLink linkName="Projects" />
            <NavLink linkName="Fun Talk" />
        </div>
        <div className={classes.setting}>
            <button onClick={modeChangeHandler}>
                <FontAwesomeIcon icon={icon} />
            </button>
            <button onClick={muteHandler}>
              <FontAwesomeIcon icon={speakerIcon} />
            </button>
        </div>
    </nav>
  )
}

export default Nav