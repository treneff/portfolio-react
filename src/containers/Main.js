import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Main.css'
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';

const Main = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('slideIn');

    useEffect(() => {
        if (location !== displayLocation) setTransitionStage('slideOut');
    }, [location, displayLocation]);

    return (
        <main
            className={`${transitionStage}`}
            onAnimationEnd={() => {
                if (transitionStage === 'slideOut') {
                    setTransitionStage('slideIn');
                    setDisplayLocation(location);
                }
            }}>
            <Routes location={displayLocation}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </main>
    );
};

export default Main;
