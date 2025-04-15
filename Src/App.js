import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import OrderHistory from './components/OrderHistory';
import Cart from './components/Cart';
import ChangePassword from './components/ChangePassword';

const Home = () => (
  <>
    <section className="half-bg">
      <h2>Welcome to Our Beauty Salon</h2>
    </section>
    <Services />
    <AppointmentForm />
  </>
);

const AboutUs = () => (
  <section id="about-us">
    <h2>About Us</h2>
    <p>Radiant Beauty Salon & Spa offers premium beauty services, from haircuts to skincare. Visit us for a luxurious experience.</p>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <p>📍 123 Beauty Street, Birmingham, UK</p>
    <p>📞 +44 1234 567890</p>
    <p>✉️ info@radiantbeautysalon&spa.com</p>
  </section>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;