import React, { useState } from 'react';
import Nav from './Nav';
import SearchResult from './SearchResults'; 
import Footer from './Footer';

const MySearches = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    onSearch({
      location,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div>
      <Nav />
      <div className="container mx-auto p-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Find your perfect stay</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Location"
              className="w-1/3 p-2 border rounded-l"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check-In"
              className="w-1/4 p-2 border"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input
              type="date"
              placeholder="Check-Out"
              className="w-1/4 p-2 border"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <input
              type="number"
              placeholder="Guests"
              className="w-1/6 p-2 border rounded-r"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
            <button
              className="bg-red-500 text-white p-2 rounded-r-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <SearchResult searchParams={{ location, checkIn, checkOut, guests }} />


      <div className="bg-cover bg-center h-96 flex items-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80")' }}>
        <div className="bg-black opacity-40 absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10 text-white">
         
        </div>
          
        </div>
      <Footer />
    </div>
  );
};

export default MySearches;
