// import React, { useState } from 'react';
// // import moment from 'moment';
// const MedicineReminderForm = ({ addMedicineReminder, patients }) => {
//     const [patientId, setPatientId] = useState('');
//     const [medicineName, setMedicineName] = useState('');
//     const [dosage, setDosage] = useState('');
//     const [dateTime, setDateTime] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       addMedicineReminder(patientId, medicineName, dosage, dateTime);
//       setPatientId('');
//       setMedicineName('');
//       setDosage('');
//       setDateTime('');
//     };
  
//     return (
//         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4 text-green-500">Set Medicine Reminder</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">
//             Patient:
//             <select
//               value={patientId}
//               onChange={(e) => setPatientId(e.target.value)}
//               required
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//             >
//               <option value="">Select Patient</option>
//               {patients.map((patient, index) => (
//                 <option key={index} value={index}>
//                   {patient.name}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">
//             Medicine Name:
//             <input
//             type="text"
//             value={medicineName}
//             onChange={(e) => setMedicineName(e.target.value)}
//              required
//              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//             />
//     </label>
//     </div>
// <div className="mb-4">
// <label className="block text-gray-700 mb-2">
//  Dosage:
//  <input
//    type="text"
//    value={dosage}
//    onChange={(e) => setDosage(e.target.value)}
//    required
//    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//  />
// </label>
// </div>
// <div className="mb-4">
// <label className="block text-gray-700 mb-2">
//  Date and Time:
//  <input
//             type="datetime-local"
//             value={dateTime}
//             onChange={(e) => setDateTime(e.target.value)}
//             required
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//           />
//         </label>
//       </div>
//       <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
//         Set Reminder
//       </button>
//     </form>
//   );
// };

// export default MedicineReminderForm;


import React, { useState } from 'react';
import Main from './Main';
const MedicineReminderForm = ({ addMedicineReminder, patients }) => {
  const [patientId, setPatientId] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [daily, setDaily] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicineReminder(patientId, medicineName, dosage, dateTime, daily);
    setPatientId('');
    setMedicineName('');
    setDosage('');
    setDateTime('');
    setDaily(false);
  };

  return (
    <>
    <Main/>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <div>
        <label className="block text-gray-700 mb-2">
          Patient:
          <select
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Patient</option>
            {patients.map((patient, index) => (
              <option key={index} value={index}>
                {patient.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">
          Medicine Name:
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">
          Dosage:
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">
          Date and Time:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={daily}
            onChange={(e) => setDaily(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          />
          <span className="ml-2 text-gray-700">Set daily reminder</span>
        </label>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Set Medicine Reminder
      </button>
    </form>
    </>
  );
};

export default MedicineReminderForm;