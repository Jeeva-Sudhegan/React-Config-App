import React, { useEffect, useState, ReactElement } from "react";

const TimeCounter = (): ReactElement => {
    let interval;
    const [ now, setNow ] = useState<Date>(new Date());
    useEffect(() => {
        interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <h1>{ now.toLocaleTimeString() }</h1>
}

export default TimeCounter;