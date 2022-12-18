import React from 'react'
import './icons-page.css'
import { BiMoney } from 'react-icons/bi';
import { FaGift, FaHashtag, FaWaze } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import IconCircle from '../../components/icon-circle'
import Text from '../../components/text';

const IconsPage = () => {
  return (
    <div className='icons-page'>
        <div className='icons-page__container'>
            <IconCircle icon={<FaWaze size={'3rem'}/>}/>
            <Text size='larger' weight={800}>WAZE</Text>
        </div>
        <div className='icons-page__container'>
            <IconCircle icon={<HiLocationMarker size={'3rem'}/>}/>
            <Text size='larger' weight={800}>GOOGLE MAPS</Text>
        </div>
        <div className='icons-page__container'>
            <IconCircle icon={<FaHashtag size={'3rem'}/>}/>
            <Text size='larger' weight={800}>#FromAToZForever</Text>
            <Text size='medium' weight={400}>Please tag us in your socials!<br/>Add #FromAToZForever</Text>
        </div>
        <div className='icons-page__container'>
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