import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button, Form, Alert } from 'react-bootstrap';

const Checkout = ({ setView }) => {
  const { getTotal, cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Initialize Paystack payment
    const PAYSTACK_PUBLIC_KEY = 'your_paystack_public_key_here'; // Replace with actual key
    const amount = getTotal() * 100; // Convert to kobo (assuming NGN)
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: amount,
      currency: 'NGN',
      callback: (response) => {
        console.log('Payment successful!', response);
        alert('Payment successful! Order placed.');
        // Clear cart or redirect
        setView('home');
      },
      onClose: () => {
        console.log('Payment window closed');
      },
    });
    handler.openIframe();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <h4>Total: ${getTotal()}</h4>
        <Button variant="primary" type="submit">
          Pay Now
        </Button>
      </Form>
      <Button variant="secondary" onClick={() => setView('cart')} className="mt-2">
        Back to Cart
      </Button>
    </div>
  );
};

export default Checkout;
