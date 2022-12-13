import React from 'react'
import './icons-page.css'
import { FaWaze } from 'react-icons/fa'
import IconCircle from '../../components/icon-circle'

const IconsPage = () => {
    console.log(typeof FaWaze)
  return (
    <div className='icons-page'>
        <IconCircle icon={<FaWaze size={'2rem'}/>}/>
    </div>
  )
}

export default IconsPage