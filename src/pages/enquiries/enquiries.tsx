import React from 'react'
import Text from '../../components/text'
import { FaWhatsapp } from 'react-icons/fa'
import './enquiries.css'

const Enquiries = () => {
    const names_list = ['Ameerul', 'Zebo', 'Dato Nadzirah Osman']

  return (
    <div className='enquiries'>
        <Text className='enquiries__title' size='large' weight={700}>For any enquiries, contact:</Text>
        {names_list.map((name, key) => 
            <div className="enquiries__container" key={key}>
                <Text size='medium' weight={600}>{name}</Text>
                <button className='enquiries__button'><FaWhatsapp style={{marginRight: '0.5rem'}}/>Whatsapp</button>
            </div>
        )}
    </div>
  )
}

export default Enquiries