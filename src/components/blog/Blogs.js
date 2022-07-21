import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import BlogBanner from './BlogBanner';

const Blogs = () => {
    return (
        <div>
            <Header>
                <BlogBanner />
                <Footer />
            </Header>
        </div>
    );
};

export default Blogs;