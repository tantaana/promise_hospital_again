import React from 'react';
import blogBanner from './blog-banner.jpg'

const BlogBanner = () => {
    return (
        <div>
            <img className='w-full' src={blogBanner} alt="" />
        </div>
    );
};

export default BlogBanner;