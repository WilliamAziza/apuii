import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { products } from '../api';

const ProductList = () => {
  return (
    <div>
      <div className="hero bg-light text-center py-3 mb-4 border">
        <h1 className="h3">Welcome to Clothes & Bags Store</h1>
        <p className="mb-0">Discover the latest fashion trends and accessories</p>
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
