import React from 'react';

import { Link } from 'react-router-dom';
import Logo from './Logo.png'; // Import the logo image


const Main = () => {
  return (
    <>
      <div >
      <header className="bg-blue-600 text-white  h-20">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-24 w-40 " />
          </Link>
          <div className=" font-bold text-lime-50 text-4xl">PillSync</div>
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Login</Link>
        </div>
      </header>
   
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex space-x-4">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/patient-form" className="hover:bg-gray-700 px-3 py-2 rounded-md">Patient Form</Link>
          <Link to="/medicine-reminder" className="hover:bg-gray-700 px-3 py-2 rounded-md">Medicine Reminder</Link>
          <Link to="/medical-history" className="hover:bg-gray-700 px-3 py-2 rounded-md">Medical History</Link>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Main;
