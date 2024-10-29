// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BackButton from './darkmode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ResultsContext } from './ResultsContext';
import { useContext } from 'react';

const SearchBar = () => {
  const [searchGame, setSearchGame] = useState('');
  const navigate = useNavigate();
  const {setResults} = useContext(ResultsContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://video-game-search-forum.onrender.com/api/search', {
        query: searchGame,
      });
      if (response.data) {
        const api_id = response.data.id;
        let userContent = {};

        const checkForGame = await axios.get(`https://video-game-search-forum.onrender.com/api/games/check/${api_id}`);
        
        if (checkForGame.data.exists) {
          const game_id = checkForGame.data.id;
          const [reviewResponse, recommendationResponse, completionTimeResponse] = await Promise.all([
            axios.get(`https://video-game-search-forum.onrender.com/api/reviews/game/${game_id}`),
            axios.get(`https://video-game-search-forum.onrender.com/api/recommendations/game/${game_id}`),
            axios.get(`https://video-game-search-forum.onrender.com/api/completiontimes/game/${game_id}`)
          ]);
          
          userContent = {
            reviews: reviewResponse.data,
            recommendations: recommendationResponse.data,
            completionTimes: completionTimeResponse.data
          }
        }
        setResults([{...response.data, ...userContent}]);
        console.log({...response.data, ...userContent});
        sessionStorage.setItem('searchedGameData', JSON.stringify(response.data));
        sessionStorage.setItem('searchedGameUserContent', JSON.stringify(userContent));
        navigate('/results')
      }      
    } catch (error) {
      console.log('Oh god, not an error!', error);
    }
  };
  const navigateToSignIn = () => {
    navigate ('/signin');
  }

  return (
    <div className="barrow">
      <div><BackButton /></div>
      <div>
        <form onSubmit={handleSearch}>
          <div className="search">
            <span className="material-symbols-outlined redicon"> search</span>
            <input className="search-input"
            type="text" 
            placeholder="Search For A Game..." 
            value={searchGame} 
            onChange={(e) => setSearchGame(e.target.value)} 
            />
          </div>
        </form>
      </div>
      <div><button onClick={navigateToSignIn} className="greybutton"> Sign in / Register</button></div>
    </div>
  );
};

export default SearchBar;
