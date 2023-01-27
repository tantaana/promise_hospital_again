import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bg1 from "../Specialities/SpecialitiesImg/spbg.jpg"

const SpecialitiesDetails = () => {
    const detail = useLoaderData();
    return (
        <div  style={
            {
                background: `url(${bg1})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div className='grid lg:grid-cols-1 sm:grid-cols-1'>
                <img src={detail.bgimg} className='w-full ' style={{ height: 400 }} alt="" />
                <div className='justify-between flex'>
                    <p className='text-blue-600 font-bold text-3xl p-5  '>{detail.title}</p>
                    <p className='text-blue-600 font-bold text-3xl p-5'>Cost : {detail.amount} tk</p>
                </div>
                <div className='flex gap-8  '>
                    <img src={detail.docImg} className='mb-3 h-80 w-48 rounded-2xl md:w-32 lg:w-80'></img>
                    <div className=''>

                    <p className='p-5'>
                        <p className='text-xl'>Hello, I'm</p>
                        <h4 className='text-3xl font-bold text-cyan-900'>Dr.{detail.docName}</h4>
                        
                        <h4 className='text-sm font-bold text-cyan-900 mt-7'>{detail.qualification}</h4>
                        <p className='text-xl mt-2'>  Expart : {detail.name}</p>
                        
                    </p>
                    </div>
                    <button className='text-2xl bg-cyan-400 h-10 mt-60 mr-6 w-44 rounded-2xl hover hover:bg-sky-200 font-bold text-zinc-100'> Confirm</button>
                </div>
            </div>
            <p className='text-blue-600  text-xl p-5 bg-slate-400'> {detail.det}</p>
        </div>
    );
};

export default SpecialitiesDetails;