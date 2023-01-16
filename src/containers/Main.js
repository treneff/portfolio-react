import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Work from '../components/Work';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </main>
    );
};

export default Main;
