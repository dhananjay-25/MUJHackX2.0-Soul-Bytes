

// src/Layout.js
import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';
// import Logo from './Logo.png'; // Import the logo image
import Main from './Main';

const Layout = ({ children }) => {
  return (
    <>
     {/* <Header /> */}
    <div >
      <Main/>
      {/* <header className="bg-cyan-600 text-white p-4 h-20">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
            <img src={Logo} alt="Company Logo" className="h-10 w-14" />
          </Link>
          <div className=" font-bold text-purple-700 text-4xl">PillSync</div>
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
      </nav> */}

      <div className="text-content bg-orange-200 h-96">
          <h2 className="text-center text-2xl font-bold text-sky-400">About Us</h2>
          <p>
            Welcome to <strong>PillSync</strong>, your trusted partner in
            managing and enhancing healthcare experiences. We bridge the gap
            between patients and doctors by providing a comprehensive platform
            that empowers both parties to make informed decisions.
          </p>
          <p>
            Our platform focuses on understanding each patient's unique medical
            history to ensure safe and effective treatment. Using advanced AI
            technology, we analyze your medical history to predict potential
            complications that could arise from new medications, enabling
            doctors to make well-informed prescribing decisions.
          </p>
          <p>
            In addition, <strong>PillSync</strong> helps patients stay
            on track with their treatment plans by providing timely reminders to
            take their medications. We also prioritize your safety by assisting
            you in verifying the authenticity of the medications you receive.
          </p>
          <p>
            Our mission is to create a safer, more personalized healthcare
            experience for everyone, ensuring that every patient gets the right
            care at the right time. Join us in revolutionizing healthcare with
            the power of AI.
          </p>
        </div>
        
     
      {/* Main content */}
      <main className="p-8">
        {children}
      </main>
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Layout;
