import React from 'react'
import './mobile-nav.scss'

const MobileNav = ({navOpen}) => (
  <div className={`${navOpen && 'modal'}`}>
  </div>
)

export default MobileNav