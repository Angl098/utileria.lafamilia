import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Title from './components/Title/Title';
import Servicios from './components/Servicios/Servicios';
import Accesorios from './components/Accesorios/Accesorios';
import Footer from './components/Footer/Footer';
import Contacto from './components/Contacto/Contacto';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Sobre nosotros' title='La Familía'/>
        <About />
        <Title subTitle='' title='Servicios'/>
        <Servicios/>
        <Title subTitle='' title='Accesorios'/>
        <Accesorios/>
        <Title subTitle='UBICACIÓN' title='Dónde estamos'/>
        <Contacto/>
        <Footer/>
      </div>
    </div>

  )
}

export default App
