import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './fighter-info.scss'
import FrameDataConnector from '../../connectors/FrameDataConnector';

const FighterInfo = ({ fighter }) => {
  return <div className="fighter-page">
    <NavBar />
    <h1 className='page-title'>{fighter.DisplayName}</h1>
    <div className='move-details'>
      <div className='moves-column-title'>
        <div className='all-column-titles'>
          <div className='column-title'>Name</div>
          <div className='column-title'>Base Damage</div>
          <div className='column-title'>Move Type</div>
        </div>
      </div>
      <FrameDataConnector />
    </div>
  </div>
}

export default FighterInfo