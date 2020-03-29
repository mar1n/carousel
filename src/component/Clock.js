import React, { useState, useEffect } from 'react'
import './Clock.css'

export default function Clock() {
    let [clock, setClock] = useState([
        {
            name: 'London',
            time: new Date(),
            timezone: 'Europe/London',
        },
        {
            name: 'NewYork',
            time: new Date(),
            timezone: 'America/New_York',
        },
        {
            name: 'Moscow',
            time: new Date(),
            timezone: 'Europe/Moscow',
        },
        {
            name: 'Paris',
            time: new Date(),
            timezone: 'Europe/Paris',
        }
    ]);

    useEffect(() => {
        setInterval(() => thick(), 1000)
    })

    const thick = () => {
        setClock(clock.map((clock) => {
            let szymon = new Date().toLocaleString("en-US", {timeZone: clock.timezone});
          return  {...clock, time: new Date(szymon)}
        }));
    }
    return (
        <>
            {
                clock.map(clock => 
                <div className="test" key={clock.name}>
                    { clock.name } { clock.time.toLocaleTimeString()}
                </div>
                )
            }
        </>
    )
}