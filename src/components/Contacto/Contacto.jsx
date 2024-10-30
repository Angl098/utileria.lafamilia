import React from 'react'
import './Contacto.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Contacto = () => {
    return (
        <div className='contacto'>
            <div className='contacto-p'>
                <p>Librería La Familia 📚 donde puedes encontrar internet, impresiones, papelería, útiles escolares, artículos de oficina y muchas ▶ Nos encontramos en la Av. Fernández de la Cruz 3259.
                </p>
            </div>
            <MapContainer center={[-34.6155, -58.3636]} zoom={13} style={{ width: '100%', height: '400px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}

// {34.3155, lng: -58.3636 }
export default Contacto
