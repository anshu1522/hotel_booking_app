
import React, { useState, useEffect } from 'react';
import HotelCard from './card';
import SearchBar from '../searchbar/searchbar';
const Appcard = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const getData =() =>{
      fetch("https://test-api-5bxn.onrender.com/hotels")
      .then((response) => response.json())
      .then((result)=>{ setHotels(result);
        setFilteredHotels(result);
      })
    // .then((result)=>{
    //     console.log("anshu",result);
    // })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => { 
    getData();
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  };

  return (
    <div className="app">
      <h1>Hotel Booking App</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="hotel-list">
        {filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            hotels= {filteredHotels}
          />
        ))}
      </div>
    </div>
  );
};

export default Appcard;
