import React from 'react'
import Filtros from './filtros'
import Cards from './Cards'
import './Articulos.css'

const Articulos = () => {
    return (
        <div>
            <Filtros/>
            <div className='articulos-container'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}

export default Articulos