import React from 'react'
import './icon-circle.css'

type TIconCircleProps = {
    icon?: React.ReactNode;
    link?: string;
}

const IconCircle = (props: TIconCircleProps) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className='icon-circle'>
          {props.icon}
      </div>
    </a>
  )
}

export default IconCircle