import './Header.css';
import { useRef } from 'react';
import Navigation from './Navigation';

import MenuIcon from '@mui/icons-material/Menu';

const Footer = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav');
    };
    return (
        <header>
            <div className='logo'>Trenev</div>
            <Navigation showNavBar={showNavBar} navRef={navRef} />
            <button aria-label="mobile navigation button" onClick={showNavBar} className='nav-button' fontSize='large'>
                <MenuIcon />
            </button>
        </header>
    );
};

export default Footer;
