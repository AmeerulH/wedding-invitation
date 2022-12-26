import Text from '../../components/text'
import CountdownTimer from '../../components/countdown-timer'
import { isMobile } from '../../utils/responsive';
import './save-the-date.css'

const SaveTheDate = () => {
  const wedding_date = new Date('02/11/2023').getTime();

  return (
    <div className='save-the-date bg-background2'>
      <div data-aos='zoom-in' data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Text className='save-the-date__text-save' color='#AA865B' family='Carolyna' size={isMobile() ? '4rem' : '6rem'}>Save</Text>
        <Text color='#AA865B' family='Carolyna' size={isMobile() ? '2.5rem' : '3.5rem'}>the</Text>
        <Text className='save-the-date__text-date' color='#AA865B' family='Carolyna' size={isMobile() ? '4rem' : '6rem'}>Date</Text>
        <CountdownTimer targetDate={wedding_date} />
      </div>
    </div>
  )
}

export default SaveTheDate