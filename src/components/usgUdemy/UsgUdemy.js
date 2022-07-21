import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import UsgBanner from './UsgBanner';

const UsgUdemy = () => {
    return (
        <div>
            <Header>
                <UsgBanner />
                <Footer />
            </Header>
        </div>
    );
};

export default UsgUdemy;