import React from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../components/Cart/Cart';
import NavBar from '../components/NavBar/NavBar';

function ShopCart() {
  return (
    <>
      <NavBar />
      <Container>
        <Cart/>
      </Container>
    </>
  );
}

export default ShopCart;
