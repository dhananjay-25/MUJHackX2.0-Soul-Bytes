import React, { useState } from 'react';
// import moment from 'moment';

const ReminderForm = ({ addReminder }) => {
  const [message, setMessage] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder(message, dateTime);
    setMessage('');
    setDateTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Reminder Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Add Reminder</button>
    </form>
  );
};

export default ReminderForm;
