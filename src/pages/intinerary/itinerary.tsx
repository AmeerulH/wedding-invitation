import FlowerTop from '../../assets/images/flower-top.svg'
import FlowerBottom from '../../assets/images/flower-bottom.svg'
import Text from '../../components/text'
import { isMobile } from '../../utils/responsive'

const Itinerary = () => {
    const itinerary_array = [
        {h1: 'Date', h2: 'Saturday, 11<sup>th</sup> February 2023'},
        {h1: 'Time', h2: '12:00PM - 3:30PM'},
        {h1: 'Venue', h2: 'BoraOmbak Marina Putrajaya<br/>(Glass Suites)'},
        {h1: 'Dress Code', h2: 'Traditional / Batik / Smart Casual'},
        {h1: 'Programme', h2: 'Arrival of Guests<br/>Arrival of Bride & Groom<br/>Rose Water Thing<br/>Makan Makan<br/>Bride & Groom Activity<br/>Free & Easy'},
    ]

  return (
    <div className='itinerary'>
        <div className="itinerary__intro" data-aos='fade-in' 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true" 
          >
            <Text className='itinerary__text' family='Trajan Pro Bold' size={isMobile() ? 'larger' : 'xx-large'} weight={700}>ASSALAMUALAIKUM W.B.T</Text>
            <Text className='itinerary__text' size={isMobile() ? 'small' : 'large'} weight={400}>You are cordially invited to the wedding<br/>reception of </Text>
            <Text className='itinerary__text-names' color='#aa865b' family='Trajan Pro Regular'size={isMobile() ? 'medium' : 'x-large'} weight={700}>MUHAMMAD AMEEURL HADY<br/>BIN ZUL HADI<br/>&<br/>ZEBO KHAMRAEVA</Text>
        </div>
        <div className="itinerary__modal" data-aos='zoom-in' 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img className='itinerary__flower-top' src={FlowerTop} alt='flower-top'/>
            <div className="itinerary__modal-container">
                {itinerary_array.map((items, key) => {
                    return <div className='itinerary__modal-items' key={key}>
                        <Text className='itinerary__text-h1' family='Carolyna' size={isMobile() ? 'xx-large' : 'xxx-large'} weight={800}>{items.h1}</Text>
                        <h2 dangerouslySetInnerHTML={{__html: items.h2}} />
                    </div>
                })}
            </div>
            <img className='itinerary__flower-bottom' src={FlowerBottom} alt='flower-bottom'/>
        </div>
    </div>
  )
}

export default Itinerary