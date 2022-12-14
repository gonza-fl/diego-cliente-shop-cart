import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../data/data';

function ProductDetailCard() {
  const { id } = useParams();
  const [searchProduct, setProducts] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const product = data.products.find((p) => p.name === id);
    setProducts(product);
  }, [searchProduct, id]);
  const notify = (success) => {
    if( success) {
      toast('Product added to shop cart.', {
      duration: 1000,
      position: 'top-center',
    
      // Styling
      style: {},
      className: '',
    
      // Custom Icon
      icon: '👏',
    
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
    })
    } else {
      toast('Product is already exist in the shop cart.', {
        duration: 1000,
        position: 'top-center',
      
        // Styling
        style: {},
        className: '',
      
        // Custom Icon
        icon: '❌',
      
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
      })
    }
};
  const redirect = () => {
    const path = `/`;
    navigate(path);
  };
  const addProductToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExist = cart?.some((element) => element.name === id);
    if (!productExist) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      notify(true)
    }
    else {
      notify(false)
    }
  };
  return (
    <>
      <Button variant='secondary' onClick={redirect}>
        Back to storage
      </Button>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={searchProduct?.image} />
        <Card.Body>
          <Card.Title>{searchProduct?.name}</Card.Title>
          <Card.Subtitle>{searchProduct?.category}</Card.Subtitle>
          <Card.Text>{searchProduct?.description}</Card.Text>
          <Card.Text>${searchProduct?.price}</Card.Text>
          <Button
            variant='primary'
            onClick={() => addProductToCart(searchProduct)}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
      <Toaster />
    </>
  );
}

export default ProductDetailCard;
