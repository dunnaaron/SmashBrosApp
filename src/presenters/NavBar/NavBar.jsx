import React from 'react';
import logo from '../../assets/ssbu-logo.png'
import './nav-bar.css';
import { Link } from "react-router-dom";


const NavBar = () => (
  <div className='nav-bar'>
    <div>
      <Link className='logo-link' to="/">
        <img src={logo} className='logo'/>
      </Link>   
    </div>
    <div className='nav-items'>
      <Link className='nav-item' to='/'>
        <div>Home</div>
      </Link>
      <div>Calculators</div>
      <div>Register</div>
      <Link className='nav-item' to='/About'>
        <div>About</div>
      </Link>
    </div>
  </div>
)

export default NavBar
