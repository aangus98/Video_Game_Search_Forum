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
      setResults(response.data);
      console.log(response.data);
      navigate('/results')
    } catch (error) {
      console.log('Oh god, not an error!', error);
    }
  };

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
      <div><button className="greybutton bfont"> Sign in</button></div>
    </div>
  );
};

export default SearchBar;
