import React from 'react';
import logo from '../../assets/ssbu-logo.png'
import './nav-bar.css';


const NavBar = () => (
  <div className='nav-bar'>
    <div>
      <img src={logo} className='logo'/>   
    </div>
    <div className='nav-items'>
      <div>Home</div>
      <div>Calculators</div>
      <div>Register</div>
      <div>Pokedex</div>
    </div>
  </div>
)

export default NavBar
