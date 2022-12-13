import React from 'react'
import './icon-circle.css'

type TIconCircleProps = {
    icon: React.ReactNode;
}

const IconCircle = (props: TIconCircleProps) => {
  return (
    <div className='icon-circle'>
        {props.icon}
    </div>
  )
}

export default IconCircle