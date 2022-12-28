import Text from '../../components/text'
import CountdownTimer from '../../components/countdown-timer'
import { isMobile } from '../../utils/responsive';
import './save-the-date.css'

const SaveTheDate = () => {
  const wedding_date = new Date('02/11/2023').getTime();

  return (
    <div className='save-the-date bg-background2'>
      <div className='save-the-date__container' data-aos='zoom-in' data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Text className='save-the-date__text-save' color='#AA865B' family='Carolyna' size={isMobile() ? '4rem' : '5rem'}>Save</Text>
        <Text color='#AA865B' family='Carolyna' size={isMobile() ? '2.5rem' : '3rem'}>the</Text>
        <Text className='save-the-date__text-date' color='#AA865B' family='Carolyna' size={isMobile() ? '4rem' : '5rem'}>Date</Text>
        <CountdownTimer targetDate={wedding_date} />
        <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MzQxcGV1N29wMWs3b2xza2VobW81M2VtbGogYW1lZXJ1bC56dWxoYWRpQG0&amp;tmsrc=ameerul.zulhadi%40gmail.com" rel="noreferrer">
          <button className='save-the-date__button'>
            <Text color='white' weight={700}>Add to calendar</Text>
          </button>
        </a>
      </div>
    </div>
  )
}

export default SaveTheDate