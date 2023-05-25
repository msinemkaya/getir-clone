import SliderItem from './SliderItem';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export default function CustomSlider({  SliderImages, imageClasses, slidesToShow , responsive}){

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive
  };

  return(
    <Slider {...settings} >
        {SliderImages.map((image, index) => <SliderItem img={image} key={index} className={ imageClasses }/>)}
    </Slider>
  );
}