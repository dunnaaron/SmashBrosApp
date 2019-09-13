import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './fighters.css'
import placeholder from '../../assets/sakurai.png'

const Fighters = ({ setCurrentFighter, selectedCurrentFighter }) => {

  const [allFighters, setAllFighters] = useState([]);
  const missingFighterThumbnails = ['Joker', 'Hero', 'Banjo & Kazooie']

  useEffect(() => {
    fetch('https://api.kuroganehammer.com/api/characters?game=ultimate')
    .then(results => results.json())
    .then(data => {
        setAllFighters(data);
    })
  }, [])

  return <div>
    <div className='all-fighters'>
      <div className='fighters'>
        { 
          sortFighterByName(allFighters)
            .map((fighter, index) => {
              return <Link className='fighter-info-link' to="/Fighter-info">
                <div className='fighter-container' key={index}>
                  <img
                    src={missingFighterThumbnails.includes(fighter.DisplayName) ? placeholder : fighter.ThumbnailUrl}
                    className='thumbnail' 
                  />
                  <div className='fighter' onClick = {() => setCurrentFighter(fighter)}>
                    <div>{fighter.DisplayName}</div>
                  </div>
                </div>
              </Link>
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
