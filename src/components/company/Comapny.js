import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import CompanyBanner from './CompanyBanner';
import OurOffice from './OurOffice';

const Comapny = () => {
    return (
        <div>
            <Header>
                <CompanyBanner />
                <OurOffice />
                <Footer />
            </Header>
        </div>
    );
};

export default Comapny;