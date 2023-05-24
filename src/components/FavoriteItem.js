import Button from './Button'
import {AiOutlinePlus} from "react-icons/ai"

export default function FavoriteItem({ product }) {

  const { title, image, alt, price } = product

  return (
    <div className='bg-white relative flex flex-col gap-y-1 items-center text-center text-sm font-semibold p-3'>
      <Button white textSecondary className={'absolute top-3 right-3 !w-8 h-8 border border-gray-200 rounded-lg'}>
        <AiOutlinePlus size={16}/>
      </Button>
      <img src={image} alt='' />
      <div className='text-secondary-brand-color'>{title}</div>
      <div className='text-gray-900'>{price}</div>
      <div className='text-gray-500'>{alt}</div>
    </div>
  )
}
