import React from 'react'
import './Slide.css'

export default function Slide() {
    return (
        <>
            <div className="main">
                <div className="mainSlide">
                    <div className="first">London</div>
                    <div className="second">New York</div>
                    <div className="first">Moscow</div>
                    <div className="second">Paris</div>
                </div>
            </div>
        </>
    );
}