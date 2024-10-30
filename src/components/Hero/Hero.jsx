import React from 'react'
import './Hero.css'
import hat from '../../assets/graduate-hat.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <img src={hat} alt="hat-graducation" />
                <h1>LIBRERIA LA FAMILIA</h1>
                <h3>SOBRE NOSOTROS</h3>
                <p>Librería La Familia es un negocio que se encuentra ubicado en Lugano sobre la avenida principal Fernandez de la Cruz 3259.   Nació con el sueño de poder brindar a...</p>
                <button className='btn'>VER MÁS</button>
            </div>
        </div>
    )
}

export default Hero