import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = ({ showNavBar, navRef }) => {
    return (
        <nav ref={navRef} className='navbar'>
            <ul>
                <li>
                    <Link onClick={showNavBar} to='/'>
                        Home
                    </Link>
                </li>

                <li>
                    <Link onClick={showNavBar} to='/about'>
                        About
                    </Link>
                </li>

                <li>
                    <Link onClick={showNavBar} to='/skills'>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link onClick={showNavBar} to='/work'>
                        Work
                    </Link>
                </li>
                <li>
                    <a className='resume-button' href='resume.pdf' target='_blank'>
                        <div>Resume</div>
                    </a>
                </li>
            </ul>
            <button onClick={showNavBar} className='nav-button nav-close-button'>
                <CloseIcon />
            </button>
        </nav>
    );
};

export default Navigation;
