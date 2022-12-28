/* eslint-disable jsx-a11y/iframe-has-title */
import './rsvp.css'

const Rsvp = () => {
    return (
        <div className='rsvp'>
            <div className="rsvp__form"
                data-aos='fade-in' 
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSec60Eosgb70GvViaQnmGbL6RkYqcuI_REKWe3OFGxhJkihkw/viewform?embedded=true">Loading…</iframe>
            </div>
        </div>
    )
}

export default Rsvp