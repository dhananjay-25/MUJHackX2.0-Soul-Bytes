import React, { useState } from 'react';
import Main from './Main';
const PatientForm = ({ addPatient }) => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(name, details);
    setName('');
    setDetails('');
  };

  return (
    <>
    <Main/>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-blue-500">Add Patient</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">
        Patient Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">
        Details:
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </label>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Patient
      </button>
    </form>
    </>
  );
};


export default PatientForm;
