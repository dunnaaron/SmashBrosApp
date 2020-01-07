import React, { useState } from 'react'
import './hamburger.css'

// const Hamburger = () => {
//   return <div class='hamburger'>
//       <div className='bar top' />
//       <div className='bar middle' />
//       <div className='bar bottom' />
//   </div>
// }

const Hamburger = () => {
  const [isExpanded, setExpanded] = useState(false)

  const expanded = isExpanded ? 'expanded' : '';

  return <button className='hamburger' onClick={() => setExpanded(!isExpanded)}>
      <div className={`bar top ${expanded}`}/>
      <div className={`bar middle ${expanded}`}/>
      <div className={`bar bottom ${expanded}`}/>
  </button>
}

export default Hamburger