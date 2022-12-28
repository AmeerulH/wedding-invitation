import Text from '../../components/text'
import { isMobile } from '../../utils/responsive'
import './thank-you.css'

const ThankYou = () => {
  return (
    <div className='thank-you bg-background2'>
        <div
            data-aos='fade-down' 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <Text className='thank-you__text' color='#AA865B' family='Carolyna' size={isMobile() ? '3rem': '5rem'}>We hope to see you there!</Text>
        </div>
    </div>
  )
}

export default ThankYou