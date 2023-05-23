import { useEffect, useState } from 'react';
import Container from './Container';
import categoryData from 'api/categories.json'
import Category from './Category';
import Heading from './Heading';

export default function Categories({  }){

  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoryData)
  }, [])

  return(
    <>
      <div className='bg-white py-4'>
        <Container>
          <Heading as={'h3'}>Kategoriler</Heading>
          <div className='grid grid-cols-5 lg:grid-cols-10'>
            {categories && categories.map(category => <Category key={category.id} category={category}/>)}
          </div>
        </Container>
      </div>
    </>
  );
}