import React from 'react'
import { Link } from "react-router-dom";
import { navLinks } from '../../common/navigation'
import './mobile-nav.scss'

const MobileNav = ({navOpen, toggleMobileNav}) => {
  if(navOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
  
  return <div className={`${navOpen && 'modal'}`}>
    <div className='nav-links'>
     {
       navLinks.map((page, index) => (
         <Link className='nav-item' key={index} to={page.route} onClick={toggleMobileNav}>{page.name}</Link>
       ))
     }
    </div>
  </div>
}

export default MobileNav