import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { products } from '../api';

const ProductList = () => {
  return (
    <div>
      <div className="hero bg-warning text-center py-5 mb-4 rounded">
        <h1 className="display-4 text-white">Welcome to Clothes & Bags Store</h1>
        <p className="lead text-white">Discover the latest fashion trends and accessories</p>
        <Button variant="dark" size="lg">Shop Now</Button>
      </div>
      <h2 className="mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
