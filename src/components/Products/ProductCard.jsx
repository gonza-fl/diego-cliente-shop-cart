import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ name, img, category }) => {
  const navigate = useNavigate(); 
  const handleClick = (name) =>{ 
    const path = `/product-detail/${name}`; 
    navigate(path);
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Button variant='primary' onClick={()=>handleClick(name)}>
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
