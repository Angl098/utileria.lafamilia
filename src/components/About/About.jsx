import React from 'react'
import './About.css'
import about from '../../assets/about-us.jpg'


const About = () => {
    return (
        <div className='about'>
            <div className='about-us'>
                {/* <h2>SOBRE NOSOTROS</h2> */}
                <p>Librería La Familia es un negocio que se encuentra ubicado en Lugano sobre la avenida principal Fernandez de la Cruz 3259.</p>
                <p>Nació con el sueño de poder brindar a las madres y maestras la calidad al precio que buscan. Con la necesidad de mejorar ofrecemos día a día desde impresiones, plastificaciones hasta recarga virtual.  </p>
                <p>Tenemos variedad de marcas de productos en útiles básicos e intentando poco agregar productos de artística. Esperamos que puedan visitarnos pronto y nos vuelvan a visitar!</p>
                <p>Para pedido y consultas podes escribirnos por whatsapp al: 1165700500</p>
            </div>
            <div className='image-content'>
                <img src={about} alt="Libros"/>
            </div>
        </div>
    )
}

export default About