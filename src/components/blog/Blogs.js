import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import BlogBanner from './BlogBanner';
import BlogLastPart from './BlogLastPart';

const Blogs = () => {
    return (
        <div>
            <Header>
                <BlogBanner />
                <BlogLastPart />
                <Footer />
            </Header>
        </div>
    );
};

export default Blogs;