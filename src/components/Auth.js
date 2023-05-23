import classNames from 'classnames'
import Button from './Button'
import { FaFacebookF } from 'react-icons/fa'
import PhoneInput from './PhoneInput'

export default function Auth({ className }) {
  const finalClasses = classNames('p-6', className)

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <form className={finalClasses} onSubmit={handleSubmit}>
      <h4 className='text-brand-color text-center mb-3'>
        Giriş yap veya kayıt ol
      </h4>

      <PhoneInput />

      <Button yellow rounded textPrimary>
        Telefon Numarası ile Devam Et
      </Button>

      <hr className='bg-gray-300 my-2' />
      
      <Button rounded className={'bg-blue-100 text-blue-800 hover:bg-blue-800 hover:text-blue-100 px-6'}>
        <FaFacebookF />
        <span className='mx-auto'>
          Facebook ile devam et
        </span>
      </Button>

    </form>
  )
}
