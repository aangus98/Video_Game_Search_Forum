import { useState } from 'react'
import './App.css'
import GameCard from './Components/GameCard';
import SearchBar from './Components/SearchBar';
import ReviewCard from './Components/ReviewCard';
import UserScore from './Components/UserScore';
import Extras from './Components/Extras';

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className="page">
        <header>
          <h1>GAMEFO</h1>
          <div className="row">
            <button />
            <SearchBar/>
            <button />
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
