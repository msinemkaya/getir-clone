import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderItem from './SliderItem';

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
    <div className=''>
      <Slider {...settings}>
        {SliderImages.map(image => <SliderItem img={image} />)}
      </Slider>
    </div>
  );
}