import './Header.css';
import { useRef } from 'react';
import Navigation from './Navigation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav');
    };
    return (
        <header>
            <div className='logo'>Trenev</div>
            <Navigation showNavBar={showNavBar} navRef={navRef} />
            <button onClick={showNavBar} className='nav-button' fontSize='large'>
                <KeyboardArrowDownIcon />
            </button>
        </header>
    );
};

export default Footer;
