import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import CompanyBanner from './CompanyBanner';

const Comapny = () => {
    return (
        <div>
            <Header>
                <CompanyBanner />
                <Footer />
            </Header>
        </div>
    );
};

export default Comapny;