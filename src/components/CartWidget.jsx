import React from 'react';
import { Button, Image } from 'react-bootstrap';

const CartWidget = () => {
  return (
    <Button className='position-relative' variant='dark'>
      <Image src={'images/basket.svg'} alt={'Carrito'} width={24} />
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
        1
      </span>
    </Button>
  );
};

export default CartWidget;
