import React from 'react';

const DiagnosisCard = ({ data }) => {
    console.log(data)
    const { title, why, price, img, description } = data;
    return (
        // <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //     <figure><img src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">

        //         </div>
        //         <button className="btn btn-primary">Buy Now</button>
        //     </div>
        // </div>

        // <div className="card w-96 bg-base-100 shadow-xl image-full">
        //     <figure><img className='w-full' src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>

        <div className='w-11/12 bg-teal-300 mx-auto my-8 p-10 rounded-xl shadow-xl relative md:pl-60 pt-52 md:pt-10 mt-14 md:mt-8'>
            <div className='absolute md:-left-9 left-0 md:h-full md:top-0 -top-8 md:w-56 w-full flex items-center justify-center '>
                <img className='rounded-xl shadow-lg w-[90%] h-52 object-cover' src={img} alt="" />
            </div>
            <h1 className='text-2xl font-black text-slate-900'>{title}</h1>
            <p className='mt-4 '>{description.slice(1, 70)}</p>
            <div className='flex gap-4 mt-4 flex-col md:flex-row'>
                <button className='bg-slate-900 text-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>View More</button>
                <button className='text-slate-900 bg-white px-8 py-2 font-black hover:scale-105 ease-out duration-500'>Get Test</button>
            </div>
        </div>
    );
};

export default DiagnosisCard;