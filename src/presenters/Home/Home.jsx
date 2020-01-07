import React from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import FighterConnector from '../../connectors/FighterConnector';
import './home.scss'

const Home = () => (
  <>
    <NavBar />
    <h1 className='page-title'>Fighters</h1>
    <FighterConnector />
  </>
)

export default Home
