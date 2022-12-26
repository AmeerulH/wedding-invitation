import { useCountdown } from '../../hooks/useCountdown';
import ShowCounter from './show-counter';
import './countdown-timer.css'

type TCountdownTimerProps = {
    targetDate: number;
}

const CountdownTimer = (props: TCountdownTimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(props.targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <div className="expired-notice">
      <span>Invalid</span>
      <p>Wedding day has passed already.</p>
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