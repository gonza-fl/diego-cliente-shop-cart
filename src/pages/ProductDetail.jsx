import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import ProductDetailCard from '../components/Products/ProductDetailCard';

const ProductDetail = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ProductDetailCard/>
      </Container>
    </>
  );
};

export default ProductDetail;
