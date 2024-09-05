import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.png'; // Import the logo image

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-cyan-500 text-white p-4 h-20">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-10 w-14" />
          </Link>
          <div className=" font-bold text-purple-700 text-4xl">PillSync</div>
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Login</Link>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex space-x-4">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
          <Link to="/patient-form" className="hover:bg-gray-700 px-3 py-2 rounded-md">Patient Form</Link>
          <Link to="/medicine-reminder" className="hover:bg-gray-700 px-3 py-2 rounded-md">Medicine Reminder</Link>
          <Link to="/medical-history" className="hover:bg-gray-700 px-3 py-2 rounded-md">Medical History</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
