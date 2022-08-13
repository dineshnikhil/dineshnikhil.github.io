import React from 'react'
import classes from './Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  return (
    <div className={classes.navbar}>
        <div className={classes.navLinks}>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Fun Talk</a>
        </div>
        <div className={classes.setting}>
            <button>
                <FontAwesomeIcon icon={faGear} />
            </button>
        </div>
    </div>
  )
}

export default Nav