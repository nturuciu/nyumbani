import React, { useState } from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';


function nav() {


  return (
    
        <div className="bg-gray-100">
             
      <nav className="bg-red-500 p-4 text-white ">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor"
         className="w-6 h-6">
  <path strokeLinecap="round"
   strokeLinejoin="round" 
   d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
                
                 <Link to ='/'> <button className="text-2xl font-semibold ml-2 ">Nyumbani</button> </Link>

                 
                 </div>
                
                 <Link to ='/MySearches'> <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg">Search</button></Link>  
                         <div className="flex items-center space-x-9">
            
                      <Link to = '/Rent'> <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg"> Rent Out</button> </Link>
          </div>
        </div>
      </nav>
      <div>
      </div>
<div> 
</div>
    </div>
      

      )
}

export default nav;