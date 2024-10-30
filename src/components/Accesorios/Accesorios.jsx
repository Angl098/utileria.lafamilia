import React from 'react'
import './Accesorios.css'
import img1 from '../../assets/accesorios1.jpg'
import img2 from '../../assets/accesorios2.jpg'


const Accesorios = () => {
    return (
        <div className='accesorios'>
            <div className='galeria'>
                <img src={img1} alt="Accesorios" />
            </div>
            <div className='galeria'>
                <img src={img2} alt="Accesorios" />
            </div>
        </div>
    )
}

export default Accesorios