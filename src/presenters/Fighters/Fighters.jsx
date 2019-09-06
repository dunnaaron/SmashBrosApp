import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FighterInfo from '../FighterInfo'
import './Fighters.css'

const Fighters = ({ setCurrentFighter, selectedCurrentFighter }) => {

  const [allFighters, setAllFighters] = useState([]);

  useEffect(() => {
    fetch('https://api.kuroganehammer.com/api/characters?game=ultimate')
    .then(results => results.json())
    .then(data => {
        setAllFighters(data);
    })
  }, [])

  return <div>
    <h1 className='page-title'>Fighters</h1>
    <h2>Fighter: {selectedCurrentFighter && selectedCurrentFighter.DisplayName}</h2>
    <Link className='fighter-info-link' to="/Fighter-info">
      <button className='fighter-page-button'>Fighter's Page</button>
    </Link>
    
    <div className='all-fighters'>
      <div className='fighters'>
        {
          sortFighterByName(allFighters)
            .map((Fighter, index) => {
              return <div key={index} className='fighter-container'>
                <img src={Fighter.ThumbnailUrl} className='thumbnail'  />
                <div className='fighter' onClick = {() => setCurrentFighter(Fighter)}>
                  <div>{Fighter.DisplayName}</div>
                </div>
              </div>
            })
        }
      </div>
    </div>
    
  </div>
}

const sortFighterByName = (allFighters) => {
  return allFighters.sort()
}

export default Fighters
