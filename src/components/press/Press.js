import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import PressCover from './PressCover';
import PressLastPart from './PressLastPart';

const Press = () => {
    return (
        <div>
            <Header>
                <PressCover />
                <PressLastPart />
                <Footer />
            </Header>
        </div>
    );
};

export default Press;