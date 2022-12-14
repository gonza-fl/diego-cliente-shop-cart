import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

const ItemListContainer = ({greating}) => {
  return (
    <Container>
      <Row>
        <Col md={12} className='text-center'>
          <Alert variant='danger'>
            {greating}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
