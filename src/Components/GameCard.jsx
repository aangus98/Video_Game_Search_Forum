import { useState } from 'react';
import placeholder from '../assets/placeholder.jpg';
import GameCardContent from './GameCardContent';

const GameCard = () => {
  const title = 'Game Name';
  const genre = 'Shooter';
  const dev = 'Developer';
  const criticScore = 'Score Example'
  const releaseDate = 'November 15, 2001'



  return ( 
    <div className="gamecard">
      <div className="ribbon">
          <h2 className="ribbontext press-start-2p-regular">{ title }</h2>
          <div className="boxrow">
            <div className="fakeb"> _ </div>
            <div className="fakeb"> □ </div>
            <div className="fakex"> ✖ </div>
          </div>
          {/* <div className="fakex">X</div> */}
      </div>
      <GameCardContent></GameCardContent>
    </div>
   );
}
 
export default GameCard;