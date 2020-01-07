import React from 'react';
import logo from '../../assets/ssbu-logo.png'
import './nav-bar.scss';
import { Link } from "react-router-dom";
import Hamburger from '../Hamburger/Hamburger';


const NavBar = () => (
  <div className='nav-bar'>
    <Link className='logo-link' to="/">
      <img src={logo} className='logo'/>
    </Link>   
    <DesktopNavBar logo={logo} />
    <MobileNavBar />
  </div>
)

const DesktopNavBar = ({logo}) => (
  <div className='nav-items desktop'>
    <Link className='nav-item' to='/'>Home</Link>
    <Link className='nav-item' to='/'>Calculators</Link>
    <Link className='nav-item' to='/'>Register</Link>
    <Link className='nav-item' to='/About'>About</Link>
  </div>
)

const MobileNavBar = () => (
  <div className='mobile'>
    <Hamburger />
  </div>
)

export default NavBar

