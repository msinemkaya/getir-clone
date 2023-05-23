export default function Category({ category }){

  const {title, image, id} = category

  return(
    <a href='#' className='flex flex-col items-center text-center p-4 gap-y-2 transition hover:bg-purple-50 rounded-md min-h-[8rem] group'>
      <img src={image} alt='' className='w-12 h-12 rounded border border-gray-200' />
      <span className='text-sm font-semibold leading-tight text-gray-700 group-hover:text-brand-color'>{title}</span>
    </a>
  );
}