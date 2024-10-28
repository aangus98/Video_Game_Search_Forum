import '../App.css';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import ReviewCard from '../Components/ReviewCard';
import UserScore from '../Components/UserScore';
import Extras from '../Components/Extras';
import gamefologo from '../assets/gamefologo.png';
import { useContext } from 'react';
import { ResultsContext } from '../components/ResultsContext';

export function Results() {
  const {results} = useContext(ResultsContext);

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
        <GameCard results={results[0]} className="container"></GameCard>
        <div className="cardrow container">
          <ReviewCard></ReviewCard>
          <UserScore></UserScore>
        </div>
        <Extras></Extras>
      </div>
    </div>
  )
}

export default Results;