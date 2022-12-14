import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import ProductsContainer from '../components/Products/ProductsContainer';

const Store = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ProductsContainer />
      </Container>
    </>
  );
};

export default Store;
