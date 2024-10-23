import './App.css'
import GameCard from './Components/GameCard';
import SearchBar from './Components/SearchBar';
import API from './components/API'

function App() {

  return (
   
      <div className="page">
        <header>
          <h1>GAMEFO</h1>
          <SearchBar/>
        </header>
        <GameCard />
        <API />
      </div>
  )
}

export default App