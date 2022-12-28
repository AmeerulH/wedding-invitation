import { useCountdown } from '../../hooks/useCountdown';
import ShowCounter from './show-counter';
import './countdown-timer.css'
import Text from '../text';

type TCountdownTimerProps = {
    targetDate: number;
}

const CountdownTimer = (props: TCountdownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(props.targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <div className="countdown__expired">
        <Text color='#7f6544' size='x-large' weight={700}>11/02/23</Text>
        <Text color='#7f6544' size='large' weight={500}>Wedding date has passed already.</Text>
    </div>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer