import React from 'react'
import './hamburger.scss'

const Hamburger = ({mobileNavIsOpen, toggleMobileNav}) => {

  const expanded = mobileNavIsOpen ? 'expanded' : ''

  return <button className={`hamburger ${expanded}`} onClick={toggleMobileNav} >
      <div className={`bar-top ${expanded}`}/>
      <div className={`bar-middle ${expanded}`}/>
      <div className={`bar-bottom ${expanded}`}/>
  </button>
}

export default Hamburger