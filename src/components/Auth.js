import classNames from 'classnames'
import { useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import Button from './Button'
import { FaFacebookF } from 'react-icons/fa'

export default function Auth({ className }) {
  const finalClasses = classNames('p-6', className)

  const [selected, setSelected] = useState('TR')
  const [value, setValue] = useState('')
  const inputSpan = useRef(null)

  const phones = {
    TR: '+90',
    FR: '+33',
    IT: '+39',
    GR: '+30',
    US: '+1',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = ({target}) => {
    setValue(target.value)
  }

  return (
    <form className={finalClasses} onSubmit={handleSubmit}>
      <h4 className='text-brand-color text-center mb-3'>
        Giriş yap veya kayıt ol
      </h4>

      <div className='flex gap-2 mb-4'>
        <ReactFlagsSelect
          countries={Object.keys(phones)}
          customLabels={phones}
          onSelect={(code) => setSelected(code)}
          selected={selected}
          className='flag-select'
        />
        <label className='flex-1 relative'>
          <input
            type='tel'
            className='h-14 w-full px-4 border-2 border-gray-200 hover:border-secondary-brand-color focus:border-secondary-brand-color transition-all duration-300 rounded-md bg-transparent peer text-sm focus:outline-none'
            required
            pattern='[0-9]{10,14}'
            title='this field must be a valid phone number'
            value={value}
            onChange={handleChange}
          />
          <span ref={inputSpan} className={`${value ? 'h-6 text-xs !text-brand-color' : ''} absolute inset-0 h-full px-4 flex items-center text-gray-500 text-sm peer-focus:h-6 peer-focus:text-xs peer-focus:text-secondary-brand-color transition-all peer-valid:h-6 peer-valid:text-secondary-brand-color peer-valid:text-xs`}>
            Telefon Numarası
          </span>
        </label>
      </div>

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
