import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetailsBanner from '../BlogDetailsBanner/BlogDetailsBanner';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    const { care, description, date, img, fullTitle, title, Details } = blogDetails;
    console.log(blogDetails)
    return (
        <div>
            <BlogDetailsBanner banner={blogDetails}></BlogDetailsBanner>
        </div>
    );
};

export default BlogDetails;