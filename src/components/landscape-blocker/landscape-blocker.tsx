import Text from '../text'
import './landscape-blocker.css'

const LandscapeBlocker = () => {
  return (
    <div className='landscape-blocker'>
        <div className="phone"></div>
        <Text color='white' size='x-large' weight={900}>Please rotate your device!</Text>
    </div>
  )
}

export default LandscapeBlocker