import React, { useEffect, useState } from 'react';
import BlogBanner from '../BlogBanner/BlogBanner';
import BlogsCards from '../BlogsCards/BlogsCards';

const Blogs = () => {

    return (
        <div>
            <BlogBanner></BlogBanner>
            <BlogsCards></BlogsCards>
        </div>
    );
};

export default Blogs;