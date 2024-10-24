import { useState } from 'react'
import './App.css'
import GameCard from './Components/GameCard';
import SearchBar from './Components/SearchBar';
import ReviewCard from './Components/ReviewCard';
import UserScore from './Components/UserScore';
import Extras from './Components/Extras';
import gamefologo from './assets/gamefologo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
   
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
      </div>
    
  )
}

export default App
