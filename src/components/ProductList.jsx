import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { products } from '../api';

const ProductList = () => {
  return (
    <div>
      <div className="hero bg-primary text-center py-5 mb-4 rounded text-white">
        <h1 className="display-4">Welcome to Clothes & Bags Store</h1>
        <p className="lead">Discover the latest fashion trends and accessories</p>
        <Button variant="light" size="lg">Shop Now</Button>
      </div>
      <h2 className="mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
