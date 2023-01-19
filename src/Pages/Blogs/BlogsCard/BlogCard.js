import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    console.log('hallo blogs', blog)
    const { img, fullTitle, description } = blog;
    return (

        <Link to={'/'} className="card md:card-side bg-base-100 shadow-xl rounded-md  border-solid border-2 border-teal-500  transform transition duration-500 hover:scale-105">
            <img className='h-full md:w-7/12 rounded-md ' src={img} alt="Album" />
            <div className="card-body md:w-6/12">

                <h2 className="text-base font-bold">{
                    fullTitle.slice(1, 30) + '...'
                }</h2>
                <p>{
                    description.slice(1, 60) + '...'
                }</p>

            </div>
        </Link>


    );
};

export default BlogCard;