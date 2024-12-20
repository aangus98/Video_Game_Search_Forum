import { useState } from 'react'
import axios from 'axios'

function API() {
const [gameTitle, setGameTitle] = useState('');
const [results, setResults] = useState([]);

const handleSearch = async () => {
  try {
    const response = await axios.post('https://video-game-search-forum.onrender.com/api/search', {query: gameTitle});
    setResults(response.data);
    console.log(response.data);
  } catch (error) {
    console.log('Oh god, not an error!:', error);
  }
};

  return (
    <div>
      <h1>Search for a game</h1>
      <input
        type='text'
        value={gameTitle}
        onChange={(e) => setGameTitle(e.target.value)}
        placeholder='Search for a game'
        />
        <button onClick={handleSearch}>Search</button>

        <ul>
          {results.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default API;
