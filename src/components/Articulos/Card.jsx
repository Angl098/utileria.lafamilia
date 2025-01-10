import React from 'react'
import './Articulos.css'

const Card = ({imgSrc, pt}) => {
    return (
        <div className='custom-image'>
            <img src={imgSrc} alt="" />
        </div>
    )
}

export default Card