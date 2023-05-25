import Heading from './Heading';

export default function Card({ card }){

  const {image, title, description} = card

  return(
    <div className='bg-white p-10 flex-1 shadow-sm rounded-lg flex flex-col items-center'>
      <img src={image} alt='' className='w-36 h-36 mb-6' />
      <Heading as={'h6'} className={'text-secondary-brand-color text-lg'}>{title}</Heading>
      <p className='text-sm text-gray-700'>{description}</p>
    </div>
  );
}