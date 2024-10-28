import '../App.css';
import GameCard from '../components/GameCard';
import SearchBar from '../components/SearchBar';
import ReviewCard from '../Components/ReviewCard';
import UserScore from '../Components/UserScore';
import Extras from '../Components/Extras';
import gamefologo from '../assets/gamefologo.png';
import API from '../components/API';

export function Results() {

  return (
    <div className="Bakcground container">
      <div className="page container">
        <header className="container"> 
          <div className="logo container">
            <img className="imagelogo container" src={gamefologo} width="900"></img>
          </div>
          <div className='container'>
            
            <SearchBar className="container"/>
            
          </div>
          
        </header>
        <GameCard className="container"></GameCard>
        <div className="cardrow container">
          <ReviewCard></ReviewCard>
          <UserScore></UserScore>
        </div>
        <Extras></Extras>
        <API />
      </div>
    </div>
  )
}

// export default Results;