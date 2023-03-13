import React from 'react';
import { HiClock, HiGlobeAlt, HiHome, HiUserGroup } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './InternationalCenters.css'

const InternationalCenters = () => {
    return (
        <div className='chooseManipal-bg p-14 my-10 lg:my-28'>
            <div className='good-health rounded-md p-5'>
                <div className='w-full text-white'>
                    <div className='lg:w-2/3 text-center mx-auto'>
                        <div>
                            <p className='text-3xl lg:text-4xl font-semibold mb-2'>Choose Promise Hospital</p>
                            <p className='text-xl lg:text-2xl font-semibold'>Choose a world of good health</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl lg:text-2xl'>From starting out as a vision of one man's dream to the reality of revolutionizing the health care industry, we are proud to be the flag bearers of this paradigm shift with our clinical excellence, patient centricity and ethical practices integral to healthcare</p>
                        </div>
                        <div className='text-white my-10'>
                            <Link to="/about"><button className='btn hover:bg-teal-500 hover:border-none px-6 py-0 text-white'>Read More</button></Link>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2'>
                    <div className='flex justify-center items-center gap-4 text-white '>
                        <HiClock className='text-4xl bg-white text-black rounded-lg'></HiClock>
                        <div className='w-[300px]'>
                            <h2 className='text-2xl font-bold'>68+</h2>
                            <p className='text-xl'>years of experience</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4 text-white '>
                        <HiUserGroup className='text-4xl bg-white text-black rounded-lg'></HiUserGroup>
                        <div className='w-[300px]'>
                            <h2 className='text-2xl font-bold'>45+</h2>
                            <p className='text-xl'>million lives touched</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4 text-white '>
                        <HiGlobeAlt className='text-4xl bg-white text-black rounded-lg'></HiGlobeAlt>
                        <div className='w-[300px]'>
                            <h2 className='text-2xl font-bold'>60</h2>
                            <p className='text-xl'>countries helped</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-4 text-white '>
                        <HiHome className='text-4xl bg-white text-black rounded-lg'></HiHome>
                        <div className='w-[300px]'>
                            <h2 className='text-2xl font-bold'>7600+</h2>
                            <p className='text-xl'>beds in 28+ hospitals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalCenters;