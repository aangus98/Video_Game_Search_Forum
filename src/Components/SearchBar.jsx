import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="barrow">
      <div><button className="greybutton"> 𖤓 / ☾ .⭒</button></div>
      <div>
        <form>
          <div className="search">
            <span class="material-symbols-outlined redicon"> search</span>
            <input className="search-input"
            type="text" 
            placeholder="Search For A Game..." 
            value={searchTerm} 
            onChange={handleSearch} 
            />
          </div>
        </form>
      </div>
      <div><button className="greybutton"> Sign in</button></div>
    </div>
  );
};

export default SearchBar;