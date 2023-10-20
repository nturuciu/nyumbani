import React, {useState}  from 'react';
import './index.css'; 
import Nav from './Nav'; 
import Footer from './Footer';
import { Link } from 'react-router-dom';



function App() { 
  
  return (
    
    <div>
     
      <Nav/>
<div className='relative'>
    

</div>
            <div className="bg-cover bg-center h-96 flex items-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80")' }}>
        <div className="bg-black opacity-40 absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl font-semibold mb-2">Tembea Kenya</h2>
          <p className="text-lg">Find great places to stay in Kenya</p>
   <Link to ='/SignUp'> <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"> Get Started</button>  </Link>
          
        </div>
      </div>


      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
       
          <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-100 ease-in hover:scale-105">
            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="Listing 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Cozy Mountain Cabin</h3>
              <p className="text-gray-600">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              <p className="text-gray-800 font-semibold mt-2">Kshs.1500/night</p>
            </div>
                    </div>
          {/* I will add more listings here */}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
