import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import BlogCard from '../BlogsCard/BlogCard';
import blogBg from '../BlogBg/bg.jpeg'

const BlogsCards = () => {

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/blogs`)
            const data = await res.json()
            return data
        }
    })




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
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default BlogsCards;