import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = 'http://localhost:5000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
  <div>
    <Container>
      <Row>
        {productList.map((menu) => (
            <Col lg={3}>
            <ProductCard item={menu} />
            </Col>
        ))}
      </Row>    
    </Container>
  </div>
  );
}

export default ProductAll