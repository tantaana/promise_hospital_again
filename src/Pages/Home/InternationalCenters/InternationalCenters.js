import React from 'react';
import { HiClock, HiGlobeAlt, HiHome, HiUserGroup, IconName } from "react-icons/hi";
import './InternationalCenters.css'

const InternationalCenters = () => {
    return (
        <div className='chooseManipal-bg p-14'>
            <div className='good-health rounded-md p-5'>
                <div className='w-full text-white'>
                    <div className='lg:w-2/3 text-center mx-auto'>
                        <div>
                            <p className='text-3xl sm:text-2xl font-semibold'>Choose Manipal</p>
                            <p className='text-3xl font-semibold'>Choose a world of good health.</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-2xl'>From starting out as a vision of one man's dream to the reality of revolutionizing the health care industry, we are proud to be the flag bearers of this paradigm shift with our clinical excellence, patient centricity and ethical practices integral to healthcare.</p>
                        </div>
                        <div className='text-white mt-5 mb-5'>
                            <button className='btn px-6 py-0 text-whtie'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='lg:flex sm:grid justify-around mt-4 text-whtie'>
                    <div className='text-white text-2xl flex justify-center items-center gap-5 mb-4'>
                        <HiClock className='text-3xl bg-white text-black rounded-lg text-blue-500'></HiClock>
                        <div>
                            <h2>68+</h2>
                            <p>years of experience</p>
                        </div>
                    </div>
                    <div className='text-white text-2xl flex justify-center items-center gap-5 mb-4'>
                        <HiUserGroup className='text-3xl bg-white text-black rounded-lg'></HiUserGroup>
                        <div>
                            <h2>45+</h2>
                            <p>million lives touched</p>
                        </div>
                    </div>
                    <div className='text-white text-2xl flex justify-center items-center gap-5 mb-4'>
                        <HiGlobeAlt className='text-3xl bg-white text-black rounded-lg'></HiGlobeAlt>
                        <div>
                            <h2>60</h2>
                            <p>countries helped</p>
                        </div>
                    </div>
                    <div className='text-white text-2xl flex justify-center items-center gap-5 mb-4'>
                        <HiHome className='text-3xl bg-white text-black rounded-lg'></HiHome>
                        <div>
                            <h2>7600+</h2>
                            <p>Beds in 28+ hospitals</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternationalCenters;