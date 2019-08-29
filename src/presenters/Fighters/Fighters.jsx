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
    <h1>Fighters</h1>
    <h2>Fighter: {selectedCurrentFighter && selectedCurrentFighter.DisplayName}</h2>
    <Link to="/Fighter-info">
      <button>Fighter's Page</button>
    </Link>
    <div className='Fighters'>
      {
        sortFighterByName(allFighters)
          .map((Fighter, index) => {
            return <div key={index}>
              <img src={Fighter.ThumbnailUrl} className='thumbnail' onClick = {() => setCurrentFighter(Fighter)}/>
              <div className='fighter'>{Fighter.DisplayName}</div>
            </div>
          })
      }
    </div>
  </div>
}

const sortFighterByName = (allFighters) => {
  return allFighters.sort()
}

export default Fighters
