import './App.css'
import GameCard from './components/GameCard';
import SearchBar from './components/SearchBar';
import ReviewCard from './components/ReviewCard';
import UserScore from './components/UserScore';
import Extras from './components/Extras';
import gamefologo from './assets/gamefologo.png'
import API from './components/API'

function App() {

  return (
    <div className="Bakcground">
      <div className="page">
        <header>
          <div classsName="logo">
            <img src={gamefologo} width="900"></img>
          </div>
          <div>
            
            <SearchBar/>
            
          </div>
          
        </header>
        <GameCard></GameCard>
        <div className="cardrow">
          <ReviewCard></ReviewCard>
          <UserScore></UserScore>
        </div>
        <Extras></Extras>
        <API />
      </div>
    </div>
  )
}

export default App
