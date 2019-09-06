import React, { useState, useEffect } from 'react'
import './fighter-info.css'

const FighterInfo = ({ fighter }) => {
  const [fighterMoveData, setFighterMoveData] = useState([]);

  useEffect(() => {
    fetch(`https://api.kuroganehammer.com/api/characters/name/${fighter.DisplayName}/moves?game=ultimate`)
    .then(results => results.json())
    .then(data => {
        setFighterMoveData(data);
    })
  }, [])

  return <div className="fighter-page">
    <h1 className='page-title'>{fighter.DisplayName}</h1>
    <div className='move-details'>
      <div className='moves-column-title'>
        <div className='all-column-titles'>
          <div className='column-title'>Name</div>
          <div className='column-title'>Base Damage</div>
          <div className='column-title'>Move Type</div>
        </div>
        
      </div>
      <div className='moves-rows'>
        {
          fighterMoveData.map((move, index) => (
          <div key={index} className='moves-row'>
            <div className='column-info'>{move.Name}</div>
            <div className='column-info'>{move.BaseDamage}</div>
            <div className='column-info'>{move.MoveType}</div>
          </div>))
        }
      </div>
    </div>

  </div>
}

export default FighterInfo