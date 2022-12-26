import React from 'react';

type TDateTimeDisplayProps = {
    value: React.ReactNode;
    type: React.ReactNode;
    isDanger: unknown;
}

const DateTimeDisplay = (props: TDateTimeDisplayProps) => {
    return (
        <div className={props.isDanger ? 'countdown danger' : 'countdown'}>
            <p>{props.value}</p>
            <span>{props.type}</span>
        </div>
    );
};

export default DateTimeDisplay;