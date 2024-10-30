import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <div className='footer-section'>
                <h3>Nuestros Servicios</h3>
                <ul>
                    <li>Impresiones</li>
                    <li>Escaneo</li>
                    <li>Fotos 4×4</li>
                    <li>Útiles</li>
                </ul>
            </div>
            <div className='footer-section'>
                <h3>Donde estamos</h3>
                <p>Av. Fernandez de la Cruz 3259, Ciudad Autónoma de Buenos Aires</p>
            </div>
            <div className='footer-section'>
                <h3>¡Seguinos!</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div className='footer-copy'>
                Librería La Familia © 2019
            </div>
        </footer>
        
        
    )
}

export default Footer