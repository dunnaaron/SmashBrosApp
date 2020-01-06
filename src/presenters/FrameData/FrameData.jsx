import React, { useEffect, useState } from 'react'

const FrameData = ({fighter}) => {
  const [fighterMoveData, setFighterMoveData] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.kuroganehammer.com/api/characters/name/${formattedUrlName(fighter)}/moves?game=ultimate`)
    .then(results => results.json())
    .then(data => setFighterMoveData(data))
  }, [])

  return <div className='moves-rows'>
    {
      fighterMoveData.map((move, index) => {
        return <div key={index} className='moves-row'>
            <div className='column-info'>{move.Name}</div>
            <div className='column-info'>{sanitizeResponse(move.BaseDamage)}</div>
            <div className='column-info'>{move.MoveType}</div>
          </div>
      })
    }
    </div>

}

const formattedUrlName = (fighter) => (fighter.DisplayName.replace(/[^0-9a-z]/gi, ''))

const sanitizeResponse = (response) => response.replace(/[hover here please|:|-]/gi, '')

export default FrameData