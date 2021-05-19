import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1>THE HOME OF UNDERGROUND</h1>
            <p>The home of all underground clubs in the UK</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>CITIES</Button>
                <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>CLUBS</Button>
            </div>

        </div>
    )
}

export default HeroSection
