import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosisCard = ({ data }) => {
    // console.log(data)
    const { title, why, price, img, description, _id } = data;

    return (

        <div className='w-11/12 bg-teal-500 mx-auto my-8 p-10 rounded-xl shadow-xl relative md:pl-60 pt-52 md:pt-10 mt-14 md:mt-8'>
            <div className='absolute md:-left-9 left-0 md:h-full md:top-0 -top-8 md:w-56 w-full flex items-center justify-center '>
                <img className='rounded-xl shadow-lg w-[90%] h-52 object-cover' src={img} alt="" />
            </div>
            <h1 className='text-3xl font-black text-slate-900'>{title}</h1>
            <p className='mt-4 text-slate-300'>{description?.slice(0, 70)}</p>
            <p className='text-xl text-slate-300 font-bold'> Cost : {price} Tk</p>
            <div className='flex gap-4 mt-4 flex-col md:flex-row'>
                <button className='bg-slate-900 text-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>View More</button>

                <Link to={`/diagnosis/${_id}`} className='text-slate-900 bg-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>Get Test</Link>
            </div>
        </div>
    );
};

export default DiagnosisCard;