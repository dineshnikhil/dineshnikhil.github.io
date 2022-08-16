import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './SocialMediaLink.module.css'
import clickSound from '../../../audio/click.wav'

function SocialMediaLink(props) {

  const clickSnd  = new Audio(clickSound);
    function playClickSound() {
        clickSnd.play();
    }

  return (
    <a href={props.link} target="_blank" className={classes.mediaLink} onClick={playClickSound}>
        <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}

export default SocialMediaLink