// import { useState } from 'react';

const GameCard = () => {
  const title = 'Game Name';
  // const genre = 'Genre';
  // const dev = 'Developer';
  // const criticScore = 'Score Example'



  return ( 
    <div className="gamecard">
      <div className="ribbon">
          <h2>{ title }</h2>
      </div>
      <div>
       <div className="imagecontainer">
        <img src={"src/assets/Halo_-_Combat_Evolved_(XBox_version_-_box_art).jpg/assets"}></img>
       </div>
       <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
       </div>
      </div>
    </div>
   );
}
 
export default GameCard;