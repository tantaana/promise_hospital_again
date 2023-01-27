import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    console.log(blog)
    const { img, fullTitle, description, _id, title } = blog;
    console.log(_id)
    return (

        <Link to={`/blog/${_id}`} className="card md:card-side bg-base-100 shadow-xl rounded-md  border-solid border-2 border-teal-500  transform transition duration-500 hover:scale-105">
            <img className='h-full md:w-7/12 rounded-md ' src={img} alt="Album" />
            <div className="card-body md:w-6/12">

                <h2 className="text-base font-bold">{
                    title.slice(0, 35)
                }</h2>
                <p className='text-sm font-semibold text-slate-400'>{
                    description.slice(0, 60) + '...'
                }</p>

            </div>
        </Link>


    );
};

export default BlogCard;