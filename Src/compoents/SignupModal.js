import React, { useState } from 'react';
import axios from 'axios';

const SignUpModal = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/signup', formData);
      setMessage('Sign-up successful! Logging you in...');
      const loginResponse = await axios.post('/api/users/login', {
        username: formData.username,
        password: 'defaultPassword123', // Default password set during signup
      }, { withCredentials: true });
      localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
      setIsLoggedIn(true);
      setTimeout(() => {
        document.getElementById('signUpModal').style.display = 'none';
      }, 1000);
    } catch (error) {
      setMessage('Error signing up. Please try again.');
    }
  };

  const closeModal = () => {
    document.getElementById('signUpModal').style.display = 'none';
    setMessage('');
  };

  return (
    <div id="signUpModal" className="modal" style={{ display: 'none' }}>
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>×</span>
        <h2>Sign Up</h2>
        <form id="signUpForm" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        {message && <div style={{ marginTop: '20px', fontSize: '16px', color: 'green', textAlign: 'center' }}>{message}</div>}
      </div>
    </div>
  );
};

export default SignUpModal;