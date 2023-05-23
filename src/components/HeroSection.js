import { ReactComponent as Icon } from 'components/imgs/getir_hero_icon.svg'
import Auth from './Auth';
import Container from './Container';
import CustomSlider from './CustomSlider';

export default function HeroSection({}) {

  const SliderImages = [
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg'
  ]

  return(
    <div className='relative before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>

      <CustomSlider SliderImages={SliderImages} imageClasses={'w-full h-[31.25rem] object-cover'} slidesToShow={1} />

      <Container className={'absolute justify-between top-0 left-1/2 -translate-x-1/2 h-full z-20'}>
        <div>
          <Icon />
          <h3 className='mt-8 text-4xl font-semibold text-white'>
            Dakikalar içinde
            <br />
            kapınızda
          </h3>
        </div>
        <Auth className={'w-96 rounded-lg bg-gray-50'}/>
      </Container>
      
    </div>
  );
}