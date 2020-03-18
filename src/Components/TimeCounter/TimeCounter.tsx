import React, { useEffect, useState, ReactElement } from "react";

const TimeCounter = (): ReactElement => {
    let interval;
    const [ checked, setChecked ] = useState( false );
	const handleCheck = () => {
		setChecked( prevChecked => !prevChecked );
	}
    const [ now, setNow ] = useState<Date>(new Date());
    useEffect(() => {
        interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <button onClick = { handleCheck } >Display</button>
            { checked && <h1>{ now.toLocaleTimeString() }</h1> }
        </>
    )
}

export default TimeCounter;