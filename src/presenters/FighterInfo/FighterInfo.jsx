import React, { useState, useEffect } from 'react'

const FighterInfo = ({ fighter }) => {
  const [fighterMoveData, setFighterMoveData] = useState([]);

  useEffect(() => {
    fetch(`https://api.kuroganehammer.com/api/characters/name/${fighter.DisplayName}/moves?game=ultimate`)
    .then(results => results.json())
    .then(data => {
        setFighterMoveData(data);
    })
  }, [])

  console.log('rendering Fighter info page', fighterMoveData)

  return <div className="FighterInfo">
    <h1>{fighter.DisplayName}</h1>
    {
      fighterMoveData.map((move, index) => {
        return <div>
          <div>{index + 1}. {move.Name}: {move.BaseDamage}</div>
        </div>
      })
    }
  </div>
}

export default FighterInfo