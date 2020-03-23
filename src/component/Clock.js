import React, { useState, useEffect } from'react'
import './Clock.css'

export default function Clock() {
    let [clock, setClock] = useState([
        {London: new Date(),
        NewYork: new Date(),
        Moscow: new Date(),
        Paris: new Date()}
    ]);

    useEffect(() => {
        setInterval(() => thick(), 1000)
    })

    

    const thick = () => {
        //console.log('Test');
            // setClock( clock.map(timer =>  (
            //         { ...timer,London: new Date(), NewYork: new Date(), Moscow: new Date(), Paris: new Date() }
            //         )));
            setClock([{London: new Date(), NewYork: new Date(), Moscow: new Date(), Paris: new Date()}])
    }
    return(
        <>
            <p>{clock[0].London.toLocaleTimeString()}</p>
        </>
    )
}