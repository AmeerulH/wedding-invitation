import {ChangeEvent, useState} from 'react'
import Text from '../../components/text'
import './rsvp.css'

const Rsvp = () => {
    const [formData, setFormData] = useState({
        guestName: '',
        contact: '',
        noOfAttendees: '',
        namesOfAttendees: ''
    });

    const { guestName, contact, noOfAttendees, namesOfAttendees } = formData;

    const updateFormData = (event: ChangeEvent<HTMLInputElement>) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  return (
    <div className='rsvp'>
        <div className='rsvp__container'>
            <Text className='rsvp__title' family='Vidaloka' size='xxx-large' weight={500}>RSVP</Text>
            <form className='rsvp__form'>
                <input
                    value={guestName}
                    onChange={e => updateFormData(e)}
                    placeholder='Name of Guest: '
                    type='text'
                    name='guestName'
                    required
                />
                <input
                    value={guestName}
                    onChange={e => updateFormData(e)}
                    placeholder='Contact Number: '
                    type='text'
                    name='contact'
                    required
                />
                <input
                    value={guestName}
                    onChange={e => updateFormData(e)}
                    placeholder='No. of Attendees:'
                    type='text'
                    name='noOfAttendees'
                    required
                />
                <input
                    className='rsvp__input-attendees'
                    value={guestName}
                    onChange={e => updateFormData(e)}
                    placeholder='Names of Attendees: '
                    type='text'
                    name='namesOfAttendees'
                    required
                /> 
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Rsvp