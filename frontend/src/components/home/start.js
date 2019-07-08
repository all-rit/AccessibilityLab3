import React from 'react';
import './homeStyle.css';

/*
Component for starting the game
*/
const Start = ({startGame,gameOption}) => {

  //Handles the click of the button and changes the colors for the game
  //if the game option is not the default or hex options
  const startClick = () => {
    if (gameOption !== 'Main' && gameOption !== 'hex') {

    };
    startGame();
  }

  return (
    <div id="main">
      <p>Game begins!</p>
    </div>
    
  );
}

export default Start;
