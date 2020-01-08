import React from 'react'
import { Link } from "react-router-dom";
import './mobile-nav.scss'

const MobileNav = ({navOpen}) => (
  <div className={`${navOpen && 'modal'}`}>
    <div className='nav-links'>
      <Link className='nav-item' to='/'>Home</Link>
      <Link className='nav-item' to='/'>Calculators</Link>
      <Link className='nav-item' to='/'>Register</Link>
      <Link className='nav-item' to='/About'>About</Link>
    </div>
  </div>
)

export default MobileNav