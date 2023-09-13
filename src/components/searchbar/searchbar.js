
import React, { useState } from 'react';
import "./searchbar.css"

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="search-bar">
      <input className='city'
        type="text"
        placeholder="Search by city(please search only for Jaipur,Mumbai,Delhi,Goa,Kolkata,Varanasi,Patna,Ranchi,Shimla,Agra,Kota)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
