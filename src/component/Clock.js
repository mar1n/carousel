import React, { useState, useEffect } from 'react'
import './Clock.css'

export default function Clock() {
    let [clock, setClock] = useState([
        {
            London: new Date(),
            NewYork: new Date(),
            Moscow: new Date(),
            Paris: new Date()
        }
    ]);

    useEffect(() => {
        setInterval(() => thick(), 1000)
    })



    const thick = () => {
        //console.log('Test');
        // setClock( clock.map(timer =>  (
        //         { ...timer,London: new Date(), NewYork: new Date(), Moscow: new Date(), Paris: new Date() }
        //         )));
        setClock([{ London: new Date(), NewYork: new Date(), Moscow: new Date(), Paris: new Date() }])
    }
    return (
        <>
            <div className="first">London {clock[0].London.toLocaleTimeString()}</div>
            <div className="second">New York {clock[0].NewYork.toLocaleTimeString()}</div>
            <div className="first">Moscow {clock[0].Moscow.toLocaleTimeString()}</div>
            <div className="second">Paris {clock[0].Paris.toLocaleTimeString()}</div>
        </>
    )
}