import { useEffect, useState } from 'react';
import Container from './Container';
import categoryData from 'api/categories.json'
import Category from './Category';

export default function Categories({  }){

  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(categoryData)
  }, [])

  return(
    <>
      <div className='bg-white py-4'>
        <Container>
          <h3 className='text-sm font-semibold mb-3'>Kategoriler</h3>
          <div className='grid grid-cols-5 lg:grid-cols-10'>
            {categories && categories.map(category => <Category key={category.id} category={category}/>)}
          </div>
        </Container>
      </div>
    </>
  );
}