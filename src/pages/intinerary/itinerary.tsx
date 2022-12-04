import React from 'react'
import FlowerTop from '../../assets/images/flower-top.svg'
import FlowerBottom from '../../assets/images/flower-bottom.svg'

const Itinerary = () => {
    const itinerary_array = [
        {h1: 'Date', h2: 'Saturday, 11<sup>th</sup> February 2023'},
        {h1: 'Time', h2: '12:00PM - 3:30PM'},
        {h1: 'Venue', h2: 'BoraOmbak Marina Putrajaya<br/>(Glass Suites)'},
        {h1: 'Dress Code', h2: 'Traditional / Batik / Smart Casual'},
        {h1: 'Programme', h2: 'Arrival of Guests<br/>Arrival of Bride & Groom<br/>Rose Water Thing<br/>Makan Makan<br/>Bride & Groom Activity<br/>Free & Easy'},
    ]

  return (
    <div className='itinerary'>
        <div className="itinerary__intro">
            <h1>ASSALAMUALAIKUM W.B.T</h1>
            <h4>You are cordially invited to the wedding<br/>reception of </h4>
            <h2>MUHAMMAD AMEEURL HADY<br/>BIN ZUL HADY<br/>&<br/>ZEBO KHAMRAEVA</h2>
        </div>
        <div className="itinerary__modal">
            <img className='itinerary__flower-top' src={FlowerTop} alt='flower-top'/>
            <div className="itinerary__modal-container">
                {itinerary_array.map((items, key) => {
                    return <div className='itinerary__modal-items' key={key}>
                        <h1>{items.h1}</h1>
                        <h2 dangerouslySetInnerHTML={{__html: items.h2}}/>
                    </div>
                })}
            </div>
            <img className='itinerary__flower-bottom' src={FlowerBottom} alt='flower-bottom'/>
        </div>
    </div>
  )
}

export default Itinerary