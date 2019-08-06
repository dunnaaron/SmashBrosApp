import React, { useState, useEffect } from 'react'

function Characters() {

  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    fetch('http://beta-api-kuroganehammer.azurewebsites.net/api/characters')
    .then(results => results.json())
    .then(data => {
        setAllCharacters(data);
    })
  }, [])


  return <div>
    <h1>Characters</h1>
    {
      allCharacters.map((character, index) => <div key={index}>{character.DisplayName}</div>)
    }
  </div>
}

export default Characters
