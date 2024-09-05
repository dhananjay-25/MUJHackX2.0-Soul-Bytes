
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientForm from './PatientForm';
import MedicineReminderForm from './MedicineReminderForm';
import MedicalHistory from './MedicalHistory';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Layout from './Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';

const App = () => {
  const [patients, setPatients] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [reminders, setReminders] = React.useState([]);

  const addPatient = (name, details) => {
    const newPatient = { name, details };
    setPatients([...patients, newPatient]);
    setHistory([...history, `Patient added: ${name}`]);
  };

  const addMedicineReminder = (patientId, medicineName, dosage, dateTime, daily = false) => {
    const newReminder = { patientId, medicineName, dosage, dateTime, daily };
    setReminders([...reminders, newReminder]);

    setHistory([...history, `Medicine reminder set for patient ${patientId}: ${medicineName} (${dosage}) at ${dateTime}`]);

    scheduleReminder(newReminder);
  };

  const scheduleReminder = (reminder) => {
    const { dateTime, medicineName, dosage, daily } = reminder;
    const reminderTime = moment(dateTime).toDate().getTime();
    const now = new Date().getTime();
    const delay = reminderTime - now;

    if (delay > 0) {
      setTimeout(() => {
        showNotification(medicineName, dosage, reminder);
      }, delay);
    }

    if (daily) {
      // Schedule daily reminders
      const interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      setInterval(() => {
        showNotification(medicineName, dosage, reminder);
      }, interval);
    }
  };

  const showNotification = (medicineName, dosage, reminder) => {
    toast(`Reminder: ${medicineName} (${dosage})`, {
      onClose: () => {
        // Optionally save acknowledgment status or perform other actions
      },
      closeButton: true
    });
  };

  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/login" element={<LoginForm onLogin={(email, password) => console.log('Logged in', email, password)} />} />
          <Route path="/signup" element={<SignupForm onSignup={(name, email, password) => console.log('Signed up', name, email, password)} />} />
          <Route path="/patient-form" element={<PatientForm addPatient={addPatient} />} />
          <Route path="/medicine-reminder" element={<MedicineReminderForm addMedicineReminder={addMedicineReminder} patients={patients} />} />
          <Route path="/medical-history" element={<MedicalHistory history={history} />} />
        </Routes>
        <ToastContainer />
      {/* </Layout> */}
    </Router>
  );
};

export default App;


// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PatientForm from './PatientForm';
// import MedicineReminderForm from './MedicineReminderForm';
// import MedicalHistory from './MedicalHistory';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
// import Layout from './Layout';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import moment from 'moment';

// const App = () => {
//   const [patients, setPatients] = React.useState([]);
//   const [history, setHistory] = React.useState([]);
//   const [reminders, setReminders] = React.useState([]);

//   const addPatient = (name, details) => {
//     const newPatient = { name, details };
//     setPatients([...patients, newPatient]);
//     setHistory(`[...history, Patient added: ${name}]`);  // Fixed template string
//   };

//   const addMedicineReminder = (patientId, medicineName, dosage, dateTime, daily = false) => {
//     const newReminder = { patientId, medicineName, dosage, dateTime, daily };
//     setReminders([...reminders, newReminder]);

//     setHistory(`[...history, Medicine reminder set for patient ${patientId}: ${medicineName} (${dosage}) at ${dateTime}]`);  // Fixed template string

//     scheduleReminder(newReminder);
//   };

//   const scheduleReminder = (reminder) => {
//     const { dateTime, medicineName, dosage, daily } = reminder;
//     const reminderTime = moment(dateTime).toDate().getTime();
//     const now = new Date().getTime();
//     const delay = reminderTime - now;

//     if (delay > 0) {
//       setTimeout(() => {
//         showNotification(medicineName, dosage, reminder);
//       }, delay);
//     }

//     if (daily) {
//       const interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//       setInterval(() => {
//         showNotification(medicineName, dosage, reminder);
//       }, interval);
//     }
//   };

//   const showNotification = (medicineName, dosage, reminder) => {
//     toast(`Reminder: ${medicineName} (${dosage})`, { // Fixed template string
//       onClose: () => {
//         // Optionally save acknowledgment status or perform other actions
//       },
//       closeButton: true,
//     });
//   };

//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<LoginForm onLogin={(email, password) => console.log('Logged in', email, password)} />} />
//           <Route path="/login" element={<LoginForm onLogin={(email, password) => console.log('Logged in', email, password)} />} />
//           <Route path="/signup" element={<SignupForm onSignup={(name, email, password) => console.log('Signed up', name, email, password)} />} />
//           <Route path="/patient-form" element={<PatientForm addPatient={addPatient} />} />
//           <Route path="/medicine-reminder" element={<MedicineReminderForm addMedicineReminder={addMedicineReminder} patients={patients} />} />
//           <Route path="/medical-history" element={<MedicalHistory history={history} />} />
//           {/* Add any additional routes here */}
//         </Routes>
//         <ToastContainer />
//       </Layout>
//     </Router>
//   );
// };

// export default App;