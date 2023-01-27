import React from 'react';

const BlogDetailsBanner = ({ banner }) => {
    const { care, description, date, img, fullTitle, title, Details } = banner;
    return (
        <div className="card md:card-side bg-base-100 shadow-xl rounded-none  bg-gradient-to-r from-blue-500 to-cyan-400 ">
            <div className="card-body text-white p-10 ">
                <h2 className="card-title text-3xl">{fullTitle}</h2>
                <h3 className='text-2xl'>{title}</h3>
                <h4 className='text-xl'>{care}</h4>
                <h5 className='text-lg'>{date}</h5>
            </div>
            <div className='p-10'>
                <figure><img src={img} alt="Album" /></figure>
            </div>

        </div>
    );
};

export default BlogDetailsBanner;