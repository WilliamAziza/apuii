import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const Cart = ({ setView }) => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="cart-item">
                <Row>
                  <Col md={2}>
                    <img src={item.image} alt={item.name} />
                  </Col>
                  <Col md={4}>
                    <strong>{item.name}</strong>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    {item.quantity}
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4>Total: ${getTotal()}</h4>
          <Button variant="success" onClick={() => setView('checkout')}>
            Proceed to Checkout
          </Button>
        </>
      )}
      <Button variant="secondary" onClick={() => setView('home')} className="mt-2">
        Back to Products
      </Button>
    </div>
  );
};

export default Cart;
