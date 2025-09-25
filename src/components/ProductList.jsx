import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { products } from '../api';

const ProductList = () => {
  return (
    <div>
      <h2>Our Products</h2>
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
