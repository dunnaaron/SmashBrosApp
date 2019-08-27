import React, { useState, useEffect } from 'react'
import './characters.css'

const Characters = ({ setCurrentFighter, selectedCurrentFighter }) => {

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
    <h2>Selected Fighter: {selectedCurrentFighter && selectedCurrentFighter.name}</h2>
    <div className='characters'>
      {
        sortCharacterByName(allCharacters)
          .map((character, index) => {
            return <div key={index}>
              <img src={character.thumbnail} className='thumbnail' onClick = {() => setCurrentFighter(character)}/>
              <div className='fighter'>{character.name}</div>
            </div>
          })
      }
    </div>
  </div>
}

const sortCharacterByName = (allCharacters) => {
  return allCharacters
    .map(character => ({ name: character.DisplayName, thumbnail: character.ThumbnailUrl, fullPhoto: character.MainImageUrl }))
    .sort(character => character.DisplayName)
}

export default Characters
