import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <p>/</p>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <p>/</p>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <p>/</p>
                <li>
                    <Link to='/work'>Work</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
