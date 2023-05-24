import Container from './Container';
import Heading from './Heading';
import NavLink from './NavLink';

export default function MobileApp({  }){

  const navLinks = [
    {
      to: '#',
      img: 'https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fappstore_uk2_16f9069b07.png&w=256&q=75'
    },
    {
      to: '#',
      img: 'https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fplaystore_uk2_3be356f52c.svg&w=256&q=75'
    },
  ]

  return(
    <Container className={'bg-brand-color bg-mobile-app p-10 mt-7 rounded-lg text-white grid grid-cols-2 relative mx-4 max-w-fit'}>
      <div className=''>
        <Heading as={'h3'} className={'text-2xl font-bold tracking-tight'}>Getir'i indirin</Heading>
        <p className='font-semibold mb-9'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
        <nav className='flex gap-2'>
          {navLinks.map((link) => (
            <NavLink to={link.to} className={'hover:scale-110'}>
              <img src={link.img} alt='' />
            </NavLink>
          ))}
        </nav>
      </div>
      <div className='absolute bottom-0 right-0 w-1/2 max-h-[95%] flex justify-center'>
        <img className='' src='https://getir.uk/_next/image/?url=https%3A%2F%2Flanding-strapi-images-development.s3.eu-west-1.amazonaws.com%2Fcta_phone_def0b92214.png&w=384&q=75' alt='' />
      </div>
    </Container>
  );
}