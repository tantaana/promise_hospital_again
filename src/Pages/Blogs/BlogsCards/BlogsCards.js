import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import BlogCard from '../BlogsCard/BlogCard';
import blogBg from '../BlogBg/bg.jpeg'
import Loader from '../../Shared/Loader/Loader';

const BlogsCards = () => {

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/blogs`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        <Loader></Loader>
    }



    return (
        <div style={
            {
                background: `url(${blogBg})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div className='w-full md:w-10/12	mx-auto mt-12' >
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6'>
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default BlogsCards;