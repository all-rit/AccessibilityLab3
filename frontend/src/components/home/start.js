import React from 'react';
import './homeStyle.css';
import Button from "../header/buttons/button";

/*
Component for starting the game
*/
const Start = ({startGame,gameOption}) => {

  //Handles the click of the button and changes the colors for the game
  //if the game option is not the default or hex options
  const startClick = () => {
    startGame();
  };

  return (
    <div id="main">
      <Button
          clickMethod={startClick}
          message={"Begin!"}
          fontSizing={"25px"}
      />
    </div>
    
  );
};

export default Start;
