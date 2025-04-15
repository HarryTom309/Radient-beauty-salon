import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [formData, setFormData] = useState({ oldPassword: '', newPassword: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/change-password', formData, { withCredentials: true });
      setMessage('Password changed successfully!');
      setFormData({ oldPassword: '', newPassword: '' });
    } catch (error) {
      setMessage('Error changing password. Please try again.');
    }
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="oldPassword">Old Password:</label>
        <input
          type="password"
          id="oldPassword"
          name="oldPassword"
          value={formData.oldPassword}
          onChange={handleChange}
          required
        />
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Change Password</button>
      </form>
      {message && <div style={{ color: message.includes('Error') ? 'red' : 'green', fontSize: '16px', textAlign: 'center' }}>{message}</div>}
    </div>
  );
};

export default ChangePassword;