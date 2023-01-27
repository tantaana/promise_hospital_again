import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetailsBanner from '../BlogDetailsBanner/BlogDetailsBanner';
import BlogDetailsInfo from '../BlogDetailsInfo/BlogDetailsInfo';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    const { care, description, date, img, fullTitle, title, Details } = blogDetails;

    return (
        <div >
            <BlogDetailsBanner banner={blogDetails}></BlogDetailsBanner>
            <BlogDetailsInfo blogInfo={blogDetails}></BlogDetailsInfo>
        </div>
    );
};

export default BlogDetails;