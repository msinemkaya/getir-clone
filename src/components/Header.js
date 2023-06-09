import { ReactComponent as Logo } from 'components/imgs/getir_logo.svg'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineUserAdd } from 'react-icons/ai'
import NavLink from './NavLink'
import Container from './Container'

export default function Header({}) {
  const navLinks = [
    {
      to: '#',
      text: 'Türkçe (TR)',
      logo: <BsGlobe2 />,
    },
    {
      to: '#',
      text: 'Giriş yap',
      logo: <AiOutlineUser />,
    },
    {
      to: '#',
      text: 'Kayıt ol',
      logo: <AiOutlineUserAdd />,
    },
  ]

  return (
    <div className='bg-brand-color'>
      <Container className={'flex items-center h-11 justify-between'}>
        
        <a href='/'>
          <Logo />
        </a>

        <nav className='flex gap-x-4 sm:gap-x-8 text-sm font-semibold'>
          {/* <NavLink to={'#'}>
            <BsGlobe2 />
            Türkçe (TR)
          </NavLink>
          <NavLink to={'#'}>
            <AiOutlineUser />
            Giriş yap
          </NavLink>
          <NavLink to={'#'}>
            <AiOutlineUserAdd />
            Kayıt ol
          </NavLink> */}

          {navLinks.map((link, index) => {
            if (link.logo) {
              return (
                <NavLink to={link.to} key={index}>
                  <span className='text-md sm:text-sm'>{link.logo}</span>
                  <span className='hidden sm:block'>{link.text}</span>
                </NavLink>
              )
            }
          })}
        </nav>
        
      </Container>
    </div>
  )
}
