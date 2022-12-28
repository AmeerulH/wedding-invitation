import DateTimeDisplay from '../date-time-display';

type TShowCounterProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const ShowCounter = (props: TShowCounterProps) => {
  return (
    <div className="show-counter">
        <DateTimeDisplay value={props.days} type={'Days'} is_danger={props.days <= 7} />
        <p>:</p>
        <DateTimeDisplay value={props.hours} type={'Hours'} is_danger={props.days <= 7} />
        <p>:</p>
        <DateTimeDisplay value={props.minutes} type={'Mins'} is_danger={props.days <= 7} />
        <p>:</p>
        <DateTimeDisplay value={props.seconds} type={'Seconds'} is_danger={props.days <= 7} />
    </div>
  );
};

export default ShowCounter;