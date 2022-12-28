import React from 'react';

type TDateTimeDisplayProps = {
    value: React.ReactNode;
    type: React.ReactNode;
    is_danger: unknown;
}

const DateTimeDisplay = (props: TDateTimeDisplayProps) => {
    return (
        <div className={props.is_danger ? 'countdown danger' : 'countdown'}>
            <p>{props.value}</p>
            <span>{props.type}</span>
        </div>
    );
};

export default DateTimeDisplay;