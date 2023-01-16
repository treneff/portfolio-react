import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/work'>Work</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
