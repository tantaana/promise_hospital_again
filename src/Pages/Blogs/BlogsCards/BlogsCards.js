import React, { useEffect, useState } from 'react';
import BlogCard from '../BlogsCard/BlogCard';
import blogBg from '../BlogBg/bg.jpeg'

const BlogsCards = () => {
    const [blogsData, setBlogsData] = useState([])

    useEffect(() => {
        fetch('blogs.json',)
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, [])



    console.log(blogsData)
    return (
        <div style={
            {
                background: `url(${blogBg})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div className='w-10/12	mx-auto mt-12' >
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6'>
                    {
                        blogsData.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default BlogsCards;