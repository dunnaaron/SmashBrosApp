import React from 'react';
import logo from '../../assets/ssbu-logo.png'
import './nav-bar.scss';
import { Link } from "react-router-dom";
import HamburgerConnector from '../../connectors/HamburgerConnector';
import { navLinks } from '../../common/navigation'


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
     {
       navLinks.map((page, index) => (
         <Link className='nav-item' key={index} to={page.route}>{page.name}</Link>
       ))
     }
  </div>
)

const MobileNavBar = () => (
  <div className='mobile'>
    <HamburgerConnector />
  </div>
)

export default NavBar

