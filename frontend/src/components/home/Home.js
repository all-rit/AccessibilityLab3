import React from 'react';
import './homeStyle.css'
import StartGame from './startGame';

/*
Component for the main home page
*/
const Home = ({
  startGame, enterSecondInfoState}) => {


  return (
    <div>
      <div>
        <StartGame
          startGame = {startGame}
          enterSecondInfoState={enterSecondInfoState}
        />
      </div>
      <br></br>
      <p className='center noBottomMargin fourthTitle'>
        For educational purposes, we record all scores and actions taken in the
        game, along with any information you choose to give us from our forum.
      </p>
      <p className='center noBottomMargin fourthTitle'>
        For further information and to see the other labs
        currently in development for this project, visit
        <a href="http://all.rit.edu" className='allLink'>
          http://all.rit.edu
        </a>
      </p>
    </div>
  );
}

export default Home;
