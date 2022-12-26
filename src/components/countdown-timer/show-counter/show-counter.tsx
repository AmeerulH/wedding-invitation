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
        <DateTimeDisplay value={props.days} type={'Days'} isDanger={props.days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={props.hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={props.minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={props.seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

export default ShowCounter;