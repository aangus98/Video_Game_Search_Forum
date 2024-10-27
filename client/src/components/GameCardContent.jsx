import placeholder from '../assets/placeholder.jpg';

const GameCardContent= () => {

  const title = 'Game Name';
  const genre = 'Shooter';
  const dev = 'Developer';
  const criticScore = 'Score Example'
  const releaseDate = 'November 15, 2001'
  
  return ( 
    <div className="cardcontent">
      <div className="imagecontainer">
        <img src={placeholder}></img>
       </div>
       <div className="stack jersey-20-charted-regular"> 
          <p className="textbox "> Genre | {genre} </p>
          <p className="textbox"> Developed By | {dev} </p>
          <p className="textbox"> Critic Score | {criticScore}</p>
          <p className="textbox"> Release Date | {releaseDate}</p>
       </div>
      </div>
   );
}
 
export default GameCardContent;