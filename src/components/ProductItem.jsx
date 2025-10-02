import React from 'react';
import { useCart } from '../context/CartContext';
import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-100 product-card border-0 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} className="img-fluid" />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate">{product.name}</Card.Title>
        <div className="mb-2">
          <span className="text-warning">★★★★★</span> (4.5)
        </div>
        <Card.Text className="fw-bold text-danger fs-5">${product.price}</Card.Text>
        <Button
          variant="warning"
          className="mt-auto w-100"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
