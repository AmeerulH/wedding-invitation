import logo from '../../assets/images/logo.svg'
import Text from '../../components/text'
import { isMobile } from '../../utils/responsive'
import './welcome.css'

const Welcome = () => {
  return (
    <div className="welcome bg-background1">
      <div className="welcome__modal" data-aos='zoom-in' 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
        <Text family='Trajan Pro Regular' size={isMobile() ? 'small' : 'large'} weight={500}>THE WEDDING RECEPTION<br/>OF</Text>
        <img className="welcome__logo" src={logo} alt='logo'/>
        <Text className='welcome__text' family='Trajan Pro Bold' size={isMobile() ? 'larger' : 'x-large'} weight={400}>AMEERUL & ZEBO</Text>
        <Text className='welcome__text' family='Trajan Pro Regular' size={isMobile() ? 'medium' : 'large'} weight={400}>11 February 2023<br/>12:00PM</Text>
        <Text className='welcome__text' family='Trajan Pro Regular' size={isMobile() ? 'medium' : 'large'} weight={400}>BoraOmbak Marina,<br/>Putrajaya</Text>
      </div>
    </div>
  )
}

export default Welcome