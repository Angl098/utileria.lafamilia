import React from 'react'
import './Filtros.css'

const Filtros = () => {
    const example = ['Cuaderno', 'Hojas rayadas', 'Tijera', 'Lapiceras Gel', 'Pegamento', 'Pegamento en barra', 'Adhesivos', 'Cotillon', 'Merceria']
    return (
        <div>
            <div className='previous-example section'>
                {/* <h2>Exemplo anterior</h2> */}
                <div className='previous-example-container'>
                    {example.map((example, index) => (<div key={index} className='example-item'>
                        {example}
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default Filtros