import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import About from './About';

const Allabout = () => {
    return (
        <div>
            <Header>
                <About />
                <Footer />
            </Header>
        </div>
    );
};

export default Allabout;