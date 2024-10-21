import React, { useState } from 'react';

function AppointmentSchedulerPage() {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    companyName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scheduled Appointment:', appointment);
    alert('Appointment scheduled successfully!');
    setAppointment({ date: '', time: '', companyName: '' }); // Reset form
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="companyName" 
          placeholder="Company Name" 
          value={appointment.companyName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={appointment.date} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="time" 
          name="time" 
          value={appointment.time} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentSchedulerPage;
