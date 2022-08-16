import React from 'react'
import myPic from '../../images/meraPic-min.jpg'
import classes from  './About.module.css'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import SocialMediaLink from '../ui/socialMediaLinks/SocialMediaLink'

function About() {
  return (
    <div className={classes.about}>
        <h1>Dinesh is a Creative Developer.</h1>
        <div className={classes.aboutParent}>
            <div className={classes.aboutOneDiv}>
                <h2>Hi! 👋</h2>
                <p>
                I'm a Developer Engineer at NTT DATA and I make awesome things for awesome people!
                </p>
                <p>
                I love Developing the ideas with creative coding on the web platform. But also my ability to deliver innovative solutions to complex problems. I create lot of(not exaggerated) of projects over on MERN Stack Technology.
                </p>
                <p>
                If you want to get in touch, come and find me on one of the many social platforms!
                </p>
                <h3>Stay awesome! ʕ •ᴥ•ʔ</h3>
            </div>
            <div className={classes.aboutTwoDiv}>
                <img src={myPic} alt="my pic" />
            </div>
        </div>
        <div className={classes.socialHandles}>
          <SocialMediaLink icon={faTwitter} link="https://twitter.com/Dn9Nikhil" />
          <SocialMediaLink icon={faGithub} link="https://github.com/dineshnikhil" />
          <SocialMediaLink icon={faInstagram} link="https://www.instagram.com/59dn.sh/" />
          <SocialMediaLink icon={faLinkedinIn} link="https://www.linkedin.com/in/dineshkumarpokkula/" />
        </div>
    </div>
  )
}

export default About