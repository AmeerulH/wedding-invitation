import React from 'react'
import './text.css'

type TTextProps = {
    align?: string;
    children?: React.ReactNode,
    className?: string;
    color?: string;
    family?: string;
    size?: string;
    text?: string;
    weight?: number;
}

const Text = ({
    align = 'center',
    children,
    className,
    color,
    family = 'Montserrat',
    size = 'medium',
    weight = 500}: TTextProps) => {
      
    const style = {
        'color': color,
        'fontFamily': family,
        'fontSize': size,
        'fontWeight': weight,
        'textAlign': align,
    } as React.CSSProperties

  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default Text