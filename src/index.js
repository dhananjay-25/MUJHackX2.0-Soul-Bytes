import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
// import PatientForm from './PatientForm';
// import MedicineReminderForm from './MedicineReminderForm';
// import MedicalHistory from './MedicalHistory';
// import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
// import Layout from './Layout';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import moment from 'moment';
// import Header from './Header';
// import Footer from './Footer';
// const App = () => {
//   const [patients, setPatients] = React.useState([]);
//   const [history, setHistory] = React.useState([]);
//   const [reminders, setReminders] = React.useState([]);

//   const addPatient = (name, details) => {
//     const newPatient = { name, details };
//     setPatients([...patients, newPatient]);
//     setHistory([...history, `Patient added: ${name}`]);
//   };

//   const addMedicineReminder = (patientId, medicineName, dosage, dateTime, daily = false) => {
//     const newReminder = { patientId, medicineName, dosage, dateTime, daily };
//     setReminders([...reminders, newReminder]);

//     setHistory([...history, `Medicine reminder set for patient ${patientId}: ${medicineName} (${dosage}) at ${dateTime}`]);

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
//       // Schedule daily reminders
//       const interval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//       setInterval(() => {
//         showNotification(medicineName, dosage, reminder);
//       }, interval);
//     }
//   };

//   const showNotification = (medicineName, dosage, reminder) => {
//     toast(`Reminder: ${medicineName} (${dosage})`, {
//       onClose: () => {
//         // Optionally save acknowledgment status or perform other actions
//       },
//       closeButton: true
//     });
//   };

//   return (
//     // <Router>
//     //   <Layout>
//     //     <Routes>
//     //       <Route path="/login" element={<LoginForm onLogin={(email, password) => console.log('Logged in', email, password)} />} />
//     //       <Route path="/signup" element={<SignupForm onSignup={(name, email, password) => console.log('Signed up', name, email, password)} />} />
//     //       <Route path="/patient-form" element={<PatientForm addPatient={addPatient} />} />
//     //       <Route path="/medicine-reminder" element={<MedicineReminderForm addMedicineReminder={addMedicineReminder} patients={patients} />} />
//     //       <Route path="/medical-history" element={<MedicalHistory history={history} />} />
//     //     </Routes>
//     //     <ToastContainer />
//     //   </Layout>
//     // </Router>
//     <>
//     <Header/>
//     <Outlet/>
//     <Footer/>
//     </>
//   );
// };
// const AppRouter=createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path: '/',
//         element: <Layout/>
//       },
//       {
//         path: '/login',
//         element: <LoginForm/>
//       },
//      {
//       path: '/signup',
//       element: <SignupForm/>
//      },
//      {
//       path: '/patient-form',
//       element: <PatientForm addPatient={addPatient} />
//       },
//       {
//         path: '/medicine-reminder',
//         element: <MedicineReminderForm addMedicineReminder={addMedicineReminder} patients={patients} />
//         },
//         {
//           path: '/medical-history',
//           element: <MedicalHistory history={history} />
//           },

//     ],
//         },
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={AppRouter}/>
//   </React.StrictMode>
// );
// export default App;

