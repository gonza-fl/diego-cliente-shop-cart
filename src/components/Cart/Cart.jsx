import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';


const Cart = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setProducts(cart);
  }, []);
  const notify = () => toast('Product deteled.', {
    duration: 1000,
    position: 'top-center',
    
  
    // Styling
    style: {},
    className: '',
  
    // Custom Icon
    icon: '✅',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
  const deleteProduct = (name) => {
    const newCart = products.filter((e) => e.name !== name);
    setProducts(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart));
    notify()
  }
  return (
    <CardGroup>
      {products?.map((p, i) => (
        <Card key={i} style={{ width: '18rem' }}>
          <Card.Img variant='top' src={p.image} />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Button variant='danger' onClick={() => deleteProduct(p.name)}>
              delete
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Toaster />
    </CardGroup>
  );
};

export default Cart;
