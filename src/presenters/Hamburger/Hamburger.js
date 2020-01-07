import React, { useState } from 'react'
import './hamburger.scss'

const Hamburger = () => {
  const [isExpanded, setExpanded] = useState(false)

  const expanded = isExpanded ? 'expanded' : '';

  return <button className={`hamburger ${expanded}`} onClick={() => setExpanded(!isExpanded)}>
      <div className={`bar-top ${expanded}`}/>
      <div className={`bar-middle ${expanded}`}/>
      <div className={`bar-bottom ${expanded}`}/>
  </button>
}

export default Hamburger