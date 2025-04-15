import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const showServiceDetails = (service) => {
    setSelectedService(service);
  };

  const addToCart = async (serviceId) => {
    try {
      await axios.post('/api/cart/add', { serviceId, quantity: 1 }, { withCredentials: true });
      alert('Service added to cart!');
    } catch (error) {
      alert('Error adding to cart. Please ensure you are logged in.');
    }
  };

  return (
    <div>
      <h2>Our Services</h2>
      <section id="services" className="services">
        <div className="services">
          {services.map(service => (
            <div
              key={service._id}
              className="service-card"
              onClick={() => showServiceDetails(service)}
            >
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Price: £{service.price}</p>
              <button onClick={(e) => { e.stopPropagation(); addToCart(service._id); }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <section id="service-details" className="service-details">
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <img src={selectedService.image} alt="service_image" style={{ width: '300px', height: 'auto' }} />
            <h3>Available Types:</h3>
            <ul>
              {selectedService.types.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </div>
  );
};

export default Services;