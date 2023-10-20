import React, { useState } from 'react';
import Footer from './Footer';
import Nav from './Nav';

function Rent() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rooms: '',
    title: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Nav/>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">List Your Bungalow</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-800 block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="text-gray-800 block mb-2">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rooms" className="text-gray-800 block mb-2">Number of Rooms:</label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            value={formData.rooms}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="text-gray-800 block mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="text-gray-800 block mb-2">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="text-gray-800 block mb-2">Upload Images:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full"
          />
        </div>

        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>
      <Footer/>
    </div>
  );
}

export default Rent;
