import React from 'react';
import Lone from './LeaderImg/Dr__Ballal (1).jpg'
import Ltwo from './LeaderImg/NK (1).jpg'
import Lthree from './LeaderImg/sowjal (1).jpg'

const OurLeader = () => {
    return (
        <div className='bg-teal-500 p-10'>
            <h1 className='text-3xl text-center mb-4 font-semibold text-slate-200'>Our Leadership</h1>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full 	">
                    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:content-center '>
                        <div className='mx-auto'>
                            <img src={Lone} alt="" />
                        </div>
                        <div className='md:col-span-2 p-4'>
                            <h1 className='text-2xl text-slate-200 font-semibold'>Mr. Dilip Jose</h1>
                            <h5 className='text-base  font-semibold mt-10 text-slate-200' >Managing Director & Chief Executive Officer, Promise Health Enterprises Pvt. Ltd.</h5>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❮</a>

                        <a href="#slide2" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:content-center '>
                        <div className='mx-auto'>
                            <img src={Lthree} alt="" />
                        </div>
                        <div className='md:col-span-2 p-4'>
                            <h1 className='text-2xl text-slate-200 font-semibold'>Dr. H Sudarshan Ballal</h1>
                            <h5 className='text-base  font-semibold mt-10 text-slate-200' >Chairman, Promise Health Enterprises Pvt. Ltd.</h5>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 md:content-center '>
                        <div className='mx-auto'>
                            <img src={Ltwo} alt="" />
                        </div>
                        <div className='md:col-span-2 p-4'>
                            <h1 className='text-2xl text-slate-200 font-semibold'>Mr. Karthik Rajagopal</h1>
                            <h5 className='text-base  font-semibold mt-10 text-slate-200' >Chief Operating Officer, Promise Health Enterprises Pvt. Ltd.

                            </h5>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-slate-200 hover:text-teal-500 hover:border-none">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurLeader;