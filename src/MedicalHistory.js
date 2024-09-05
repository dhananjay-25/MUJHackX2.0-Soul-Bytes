import React from 'react';
import Main from './Main';
const MedicalHistory = ({ history }) => {
  return (
    <>
    <Main/>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-purple-500">Medical History</h2>
      <ul className="list-disc pl-5 space-y-2">
        {history.map((entry, index) => (
          <li key={index} className="text-gray-700">{entry}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default MedicalHistory;
