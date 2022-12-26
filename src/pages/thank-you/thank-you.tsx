import Text from '../../components/text'
import { isMobile } from '../../utils/responsive'
import './thank-you.css'

const ThankYou = () => {
  return (
    <div className='thank-you'>
        <div
            data-aos='fade-up' 
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <Text color='#AA865B' family='Carolyna' size={isMobile() ? '4rem': '7rem'}>Thank You!</Text>
        </div>
    </div>
  )
}

export default ThankYou