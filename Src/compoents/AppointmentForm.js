import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'facial', date: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', formData);
      setMessage('Your appointment has been successfully booked!');
      setFormData({ name: '', email: '', service: 'facial', date: '' });
    } catch (error) {
      setMessage('Error booking appointment. Please try again.');
    }
  };

  return (
    <section id="appointment" className="appointment-form">
      <h2>Book Your Appointment</h2>
      <form id="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="service">Select Service:</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} required>
          <option value="facial">Facial</option>
          <option value="massage">Massage</option>
          <option value="haircut">Haircut</option>
          <option value="nails">Nails</option>
        </select>

        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

        <button type="submit">Book Appointment</button>
      </form>
      {message && <div style={{ color: 'green', fontSize: '16px', textAlign: 'center' }}>{message}</div>}
    </section>
  );
};

export default AppointmentForm;