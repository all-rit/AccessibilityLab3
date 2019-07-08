import React from 'react';
import './title.css';

/*
Displays the title of the page dependent on the state it is in
State options: Home page or Game apge
*/
const Title = ({gameState, replay}) => {
  return (
    <div>
      {gameState?
        <div>
          <p
            className='mainTitle'
          >
            Let the Game Begin!
          </p>
          <p
            className='secondTitle'
          >
            Click as fast as you can the correct colored circle!
          </p>
        </div>
        :
        <div>
        {replay?
          <div>
            <p
              className='mainTitle'
            >
              Game Over!
            </p>
            <p
              className='secondTitle'
            >
              Try again?
            </p>
          </div>
          :
          <div>
            <p
              className='mainTitle'
            >
              Blindness Accessibility
            </p>
            <p
              className='secondTitle'
            >
              Have you wondered how blind persons use computers?
            </p>
          </div>
        }
        </div>
      }
    </div>
  );
}

export default Title;
