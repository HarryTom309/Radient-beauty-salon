import React, { useState } from 'react';
import axios from 'axios';
import SignUpModal from './SignUpModal';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/users/logout', {}, { withCredentials: true });
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header>
      <div className="logo">
        <h1>Radiant Beauty Salon & Spa</h1>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>☰</div>

      <nav style={{ display: menuOpen ? 'block' : 'none' }}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/#appointment">Book Appointment</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/cart">Cart</a></li>
          {isLoggedIn && (
            <>
              <li><a href="/order-history">Order History</a></li>
              <li><a href="/change-password">Change Password</a></li>
              <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
            </>
          )}
          {!isLoggedIn && (
            <li><button className="signup-btn" onClick={() => document.getElementById('signUpModal').style.display = 'block'}>Sign Up</button></li>
          )}
        </ul>
      </nav>
      <SignUpModal setIsLoggedIn={setIsLoggedIn} />
    </header>
  );
};

export default Header;