import '../App.css';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import ReviewCard from '../components/ReviewCard';
import UserScore from '../components/UserScore';
import Extras from '../components/Extras';
import gamefologo from '../assets/gamefologo.png';
import { useContext } from 'react';
import { ResultsContext } from '../components/ResultsContext';

export function Results() {
  const {results} = useContext(ResultsContext);

  const gameDetails = results[0];
  const reviews = results[0].reviews || [];
  const recommendations = results[0].recommendations || [];
  const completionTimes = results[0].completionTimes || [];

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar />
            
          </div>
          
        </header>
        <GameCard results={gameDetails} className="container"></GameCard>
        <div className="cardrow container">
          <ReviewCard reviews={reviews} />
          <UserScore reviews={reviews} />
        </div>
        <Extras recommendations={recommendations} completionTimes={completionTimes} />
      </div>
    </div>
  )
}

export default Results;