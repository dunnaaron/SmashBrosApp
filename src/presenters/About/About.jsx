import React from 'react'
import NavBar from '../NavBar/NavBar.jsx';

const About = () => (
  <>
    <NavBar />
    <h1 className='page-title'>About</h1>
    <div className='about-body'>
      <p>
        This site is a project to help me practice my web development.
        All data on this site is from the <a href='https://github.com/Frannsoft/FrannHammer'>FrannHammer Smash Bros API </a>.
        We are inspired by <a href='http://kuroganehammer.com/Ultimate'>KuroganeHammer's SSBU site</a>. 
        You should check his out, it's better. 
      </p>
    </div>
  </>
)

export default About