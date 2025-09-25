import React from 'react';
import { useCart } from '../context/CartContext';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-100 product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
