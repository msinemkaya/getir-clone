import { useState, useRef } from 'react'
import ReactFlagsSelect from 'react-flags-select'

export default function PhoneInput({  }){

  const phones = {
    TR: '+90',
    FR: '+33',
    IT: '+39',
    GR: '+30',
    US: '+1',
  }

  
  const inputSpan = useRef(null)

  const [selected, setSelected] = useState('TR')
  const [value, setValue] = useState('')

  const handleChange = ({target}) => {
    setValue(target.value)
  }


  return(
    <>
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
          <span ref={inputSpan} className={`${value ? 'h-6 text-xs !text-brand-color' : ''} absolute inset-0 h-full px-4 flex items-center text-gray-500 text-sm peer-focus:h-6 peer-focus:text-xs peer-focus:text-secondary-brand-color transition-all peer-valid:h-6 peer-valid:text-secondary-brand-color peer-valid:text-xs whitespace-nowrap`}>
            Telefon Numarası
          </span>
        </label>
      </div>
    </>
  );
}