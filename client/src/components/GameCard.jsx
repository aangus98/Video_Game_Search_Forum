
import GameCardContent from './GameCardContent';

function GameCard() {
  const title = 'Game Name';

  return (
    <div className="gamecard">
      <div className="ribbon">
        <h2 className="ribbontext press-start-2p-regular">{title}</h2>
        <div className="boxrow">
          <div className="fakeb"> _ </div>
          <div className="fakeb"> □ </div>
          <div className="fakex"> ✖ </div>
        </div>
      </div>
      <GameCardContent></GameCardContent>
    </div>
  );
}
 
export default GameCard;