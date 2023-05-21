import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from './SliderItem';
import { ReactComponent as Icon } from 'components/imgs/getir_hero_icon.svg'
import Auth from './Auth';

export default function HeroSection({}) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const SliderImages = [
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg'
  ]

  return(
    <div className='relative before:bg-gradient-to-r before:from-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
      <Slider {...settings}>
        {SliderImages.map((image, index) => <SliderItem img={image} key={index}/>)}
      </Slider>
      <div className='container absolute flex justify-between items-center top-0 left-1/2 -translate-x-1/2 h-full z-20 px-6'>
        <div>
          <Icon />
          <h3 className='mt-8 text-4xl font-semibold text-white'>
            Dakikalar içinde
            <br />
            kapınızda
          </h3>
        </div>
        <Auth className={'w-96 rounded-lg bg-gray-50'}/>
      </div>
    </div>
  );
}