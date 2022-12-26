import Text from '../../components/text'
import { FaWhatsapp } from 'react-icons/fa'
import './enquiries.css'

const Enquiries = () => {
    const names_list = [
      {name: 'Ameerul', number: '+60162234826'}, 
      {name: 'Zebo', number: '+60175224374'}, 
      {name: 'Dato Nadzirah Osman', number: '+60173520826'}
    ]

  return (
    <div className='enquiries'>
      <div 
        data-aos='zoom-in' 
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Text className='enquiries__title' size='large' weight={700}>For any enquiries, contact:</Text>
        {names_list.map((item, key) => 
            <div className="enquiries__container" key={key}>
                <Text size='medium' weight={600}>{item.name}</Text>
                <a href={`https://wa.me/${item.number}`} target='_blank' rel="noreferrer">
                  <button className='enquiries__button'><FaWhatsapp style={{marginRight: '0.5rem'}}/>Whatsapp</button>
                </a>
            </div>
        )}
      </div>
    </div>
  )
}

export default Enquiries