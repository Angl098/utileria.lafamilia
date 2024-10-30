import React from 'react'
import './Servicios.css'
import img1 from '../../assets/impresiones.jpg'
import img2 from '../../assets/escaneo.jpg'
import img3 from '../../assets/fotos-4x4.jpg'
import img4 from '../../assets/utiles.jpg'
import img5 from '../../assets/fotos2.jpg'
import img6 from '../../assets/impresion.png'
import img7 from '../../assets/escaneo.png'
import img8 from '../../assets/foto4x4.png'
import img9 from '../../assets/utiles.png'


const Servicios = () => {
    return (
        <div className='servicios'>
            <div className='galeria'>
                <img src={img1} alt="Impresiones" />
                <div className='caption'>
                    <img src={img6} alt="" />
                    <p>Impresiones</p>
                </div>
            </div>
            <div className='galeria'>
                <img src={img2} alt="Escaneo" />
                <div className='caption'>
                    <img src={img7} alt="" />
                    <p>Escaneo</p>
                </div>
            </div>
            <div className='galeria'>
                <img src={img3} alt="Fotos" />
                <div className='caption'>
                    <img src={img8} alt="" />
                    <p>Fotos 4x4</p>
                </div>
            </div>
            <div className='galeria'>
                <img src={img4} alt="Utiles" />
                <div className='caption'>
                    <img src={img9} alt="" />
                    <p>Útiles</p>
                </div>
            </div>
        </div>
    )
}

export default Servicios