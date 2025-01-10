import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import search from '../../assets/search-logo.png'
import SearchBar from './SearchBar/SearchBar';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Librería La Familia" className='logo' />
            <div className='link'>
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li>
                        <button className='btn-nav'>
                            <Link to='hero' smooth={true} offset={0} duration={500} >
                                Inicio
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className='btn-nav'>
                            <Link to='about' smooth={true} offset={-150} duration={500} >
                                Sobre nosotros
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className='btn-nav'>
                            <Link to='servicios' smooth={true} offset={-260} duration={500} >
                                Servicios
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className='btn-nav'>
                            <Link to='accesorios' smooth={true} offset={-260} duration={500} >
                                Accesorios
                            </Link>
                        </button>
                    </li>
                    {/* <li>
                        <button className='btn-nav'>
                            <Link to='contacto' smooth={true} offset={-260} duration={500} >
                                Donde estamos
                            </Link>
                        </button>
                    </li> */}
                    <li>
                        {/* <button className='btn-nav'> */}
                            <SearchBar />
                        {/* </button> */}

                    </li>
                </ul>

            </div>
            <img src={menu} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar