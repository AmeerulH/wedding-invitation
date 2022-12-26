import './icons-page.css'
import { BiMoney } from 'react-icons/bi';
import { FaGift, FaHashtag, FaWaze } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import IconCircle from '../../components/icon-circle'
import Text from '../../components/text';
import './icons-page.css'

const IconsPage = () => {
  return (
    <div className='icons-page'>
        <div className='icons-page__container' 
          data-aos='fade-right' 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
            <IconCircle link='https://waze.com/ul/hw282984nv' icon={<FaWaze size={'3rem'}/>}/>
            <Text size='larger' weight={800}>WAZE</Text>
        </div>
        <div className='icons-page__container' 
          data-aos='fade-left' 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
            <IconCircle link='https://maps.app.goo.gl/ZUNi1taz21Dz2oD49' icon={<HiLocationMarker size={'3rem'}/>}/>
            <Text size='larger' weight={800}>GOOGLE MAPS</Text>
        </div>
        <div className='icons-page__container'
          data-aos='fade-right' 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
            <IconCircle icon={<FaHashtag size={'3rem'}/>}/>
            <Text size='larger' weight={800}>#FromAToZForever</Text>
            <Text size='medium' weight={400}>Please tag us in your socials!<br/>Add #FromAToZForever</Text>
        </div>
        <div className='icons-page__container'
          data-aos='fade-left' 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
            <div className="icons-page__container-gifts">
              <IconCircle icon={<BiMoney size={'3rem'}/>}/>
              <IconCircle icon={<FaGift size={'3rem'}/>}/>
            </div>
            <Text size='larger' weight={800}>MONEY GIFT | GIFT REGISTRY</Text>
            <Text className='icons-page__container-gifts-text' size='medium' weight={400}>Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift, either a cash gift or an item from our registry list would be very welcome.</Text>
        </div>
    </div>
  )
}

export default IconsPage