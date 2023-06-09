import Heading from './Heading'
import NavLink from './NavLink'

export default function FooterCols({ col }) {
  return (
    <div>
      <Heading as={'h6'} className={'text-secondary-brand-color text-lg'}>{col.title}</Heading>
      <div className=''>
        {col.imgs && (
          col.imgs.map((img, index) => (
            <NavLink to={img.to} key={index} className={'mb-3'}>
              <img src={img.img} alt='' className=' pr-4' />
            </NavLink>
          ))
        )}

        {col.links && (
          col.links.map((link, index) => (
            <NavLink to={link.to} key={index} className={'!text-gray-700 mb-2 text-sm hover:!text-brand-color'}>
              {link.text}
            </NavLink>
          ))
        )}
      </div>
    </div>
  )
}
