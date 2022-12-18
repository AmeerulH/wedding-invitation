import React from 'react'
import Text from '../../components/text'
import './save-the-date.css'

const SaveTheDate = () => {
  return (
    <div className='save-the-date bg-background2'>
        <Text className='save-the-date__text-save' color='#AA865B' family='Carolyna' size='4rem'>Save</Text>
        <Text color='#AA865B' family='Carolyna' size='2.5rem'>the</Text>
        <Text className='save-the-date__text-date' color='#AA865B' family='Carolyna' size='4rem'>Date</Text>
    </div>
  )
}

export default SaveTheDate