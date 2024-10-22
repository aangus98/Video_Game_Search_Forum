import { useState } from 'react'
import './App.css'
import GameCard from './Components/GameCard';
import SearchBar from './Components/SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className="page">
        <header>
          <h1>GAMEFO</h1>
          <SearchBar/>
        </header>
        <GameCard />
        
      </div>
    
  )
}

export default App
