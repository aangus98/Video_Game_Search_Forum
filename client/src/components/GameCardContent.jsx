import placeholder from '../assets/placeholder.jpg';

const GameCardContent= ({results}) => {

  const genre = Array.isArray(results?.genres) ? results?.genres.join(', ') : results?.genres;
  const dev = Array.isArray(results?.developers) ? results?.developers.join(', ') : results?.developers;
  const criticScore = results?.critic_score;
  const releaseDate = results?.release_date;
  const coverArt = results?.cover;
  
  return ( 
    <div className="cardcontent">
      <div className="imagecontainer">
        <img src={coverArt}></img>
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