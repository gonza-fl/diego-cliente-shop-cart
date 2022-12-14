import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import data from '../../data/data';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setProducts(data.products);
  }, [products]);
  return (
    <CardGroup>
      {products?.map((p, i) => (
        <ProductCard
          key={i}
          name={p.name}
          img={p.image}
          category={p.category}
        />
      ))}
    </CardGroup>
  );
};

export default ProductsContainer;
