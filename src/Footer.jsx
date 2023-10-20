import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">About Nyumbani</li>
                <li className="mb-2">Contact Us </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Rent Out/In</h4>
            <ul>
             <Link to = '/Rent'> <li className="mb-2">Rent Out your home</li> </Link>
             <Link to = '/MySearches'> <li className="mb-2"> Find a Home to Rent</li> </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul>
                         <li className="mb-2">Help Center</li>
              <li className="mb-2">Cancellation options</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
