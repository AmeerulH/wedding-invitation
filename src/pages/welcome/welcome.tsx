import React from 'react'
import logo from '../../assets/images/logo.svg'

const Welcome = () => {
  return (
    <div className="welcome bg-background1">
      <div className="welcome-modal">
        <h3>THE WEDDING RECEPTION<br/>OF</h3>
        <img className="welcome__logo" src={logo} alt='logo'/>
        <h1>AMEERUL & ZEBO</h1>
        <h2>11 February 2023<br/>12:00PM</h2>
        <h2>BoraOmbak Marina,<br/>Putrajaya</h2>
      </div>
    </div>
  )
}

export default Welcome