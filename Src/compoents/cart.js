import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch services to get prices
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));

    // Fetch cart
    axios.get('/api/cart', { withCredentials: true })
      .then(response => setCart(response.data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const removeFromCart = async (serviceId) => {
    try {
      const response = await axios.post('/api/cart/remove', { serviceId }, { withCredentials: true });
      setCart(response.data);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const confirmOrder = async () => {
    try {
      await axios.post('/api/orders/confirm', {}, { withCredentials: true });
      alert('Order confirmed!');
      navigate('/order-history');
    } catch (error) {
      alert('Error confirming order. Please try again.');
    }
  };

  const calculateTotal = () => {
    if (!cart || !services.length) return 0;
    return cart.items.reduce((total, item) => {
      const service = services.find(s => s._id === item.serviceId);
      return total + (service ? service.price * item.quantity : 0);
    }, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {!cart || cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map(item => {
            const service = services.find(s => s._id === item.serviceId);
            return (
              <div key={item.serviceId} className="cart-item">
                <span>{service ? service.name : 'Unknown Service'} (Qty: {item.quantity})</span>
                <span>£{service ? service.price * item.quantity : 0}</span>
                <button onClick={() => removeFromCart(item.serviceId)}>Remove</button>
              </div>
            );
          })}
          <div className="cart-total">
            Total: £{calculateTotal()}
          </div>
          <button onClick={confirmOrder}>Confirm Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;