import { useEffect, useState } from 'react';
import Container from './Container';
import Heading from './Heading';
import Products from 'api/products.json'
import FavoriteItem from './FavoriteItem';

export default function Favorites({  }){

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    setProducts(Products)
  }, [])

  return(
    <Container>
      <Heading as={'h3'}>Favoriler</Heading>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 rounded-lg overflow-hidden gap-px'>
        {products.length && products.map(product => <FavoriteItem key={product.id} product={product} />)}
      </div>
    </Container>
  );
}