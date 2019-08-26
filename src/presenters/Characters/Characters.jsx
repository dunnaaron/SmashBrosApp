import React, { useState, useEffect } from 'react'
import './characters.css'

const Characters = () => {

  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetch('https://api.kuroganehammer.com/api/characters?game=ultimate')
    .then(results => results.json())
    .then(data => {
        setAllCharacters(data);
    })
  }, [])

  return <div>
    <h1>Characters</h1>
    <div className='characters'>
      {
        sortCharacterByName(allCharacters)
          .map((character, index) => <div className='fighter' key={index}>{character}</div>)
      }
    </div>
  </div>
}

const sortCharacterByName = (allCharacters) => {
  return allCharacters
    .map(character => character.DisplayName)
    .sort()
}

export default Characters
