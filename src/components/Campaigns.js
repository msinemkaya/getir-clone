import { useEffect, useState } from 'react';
import CustomSlider from './CustomSlider';
import Banners from 'api/banners.json'
import Container from './Container';
import Heading from './Heading';

export default function Campaigns({  }){

  const [banners , setBanners] = useState([])

  useEffect(() => {
    setBanners(Banners)
  }, [])

  const SliderImages = banners.map((banner) => banner.image)

  return(
    <Container className={'py-8'}>
      <Heading as={'h3'}>Kampanyalar</Heading>
      <CustomSlider slidesToShow={3} SliderImages={SliderImages} imageClasses={'px-2'} />
    </Container>
  );
}