import React from 'react';
import logo from '../../assets/ssbu-logo.png'
import './nav-bar.css';
import { Link } from "react-router-dom";


const NavBar = () => (
  <div className='nav-bar'>
    <div>
      <Link className='fighters-link' to="/">
        <img src={logo} className='logo'/>
      </Link>   
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
