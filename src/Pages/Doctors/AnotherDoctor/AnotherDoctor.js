import React, { useState } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AnotherDoctor = ({ doctor, setAnotherLoader }) => {
    const { doctorImg, location, speciality, position, name, _id, docURL } = doctor;
    const [loader, setLoader] = useState(false);


    const checkLoader = () => {
        setLoader(true);
        console.log(loader)

    }

    return (
        <div>

            <div className=''>
                <div className="rounded-lg p-0.5 pr-3 xl:pr-3 bg-gradient-to-b from-blue-900 to-teal-500 scale-100 hover:scale-105 ease-in duration-200">
                    <div className="bg-white rounded-lg xl:flex items-center justify-center gap-6">
                        <figure className='flex justify-center'><img src={doctorImg} alt="" className='rounded-lg w-full xl:w-[350px] h-[350px] object-cover mb-10 xl:mb-0 xl:border xl:border-blue-900 xl:border-r-4 xl:border-l-0 xl:border-y-0' /></figure>
                        <div className="flex flex-col justify-between xl:h-[350px] xl:w-[600px] px-4">
                            <div className='flex gap-2 mb-12 mt-4'>
                                <h2 className="text-blue-800 font-semibold text-2xl">{name}</h2>

                                <h2>
                                    {loader ?
                                        <div class="flex flex-col">
                                            <div class="w-8 h-8 rounded-full animate-spin
                            border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                                        </div>
                                        : ''
                                    }
                                </h2>

                            </div>
                            <p className='text-lg font-semibold text-gray-500'>{position}</p>
                            <p className='text-lg font-semibold text-teal-500 mb-6'>{speciality}</p>
                            <div className='flex items-center gap-2'>
                                <div className='text-2xl'><MdLocationPin /></div>
                                <p className='text-md text-black font-semibold'>{location}</p>
                            </div>



                            <div className="mt-8 mb-2 flex-col xl:flex-row flex gap-2 ">

                                <Link className='mx-4 xl:mx-0' to={`/doctors/${docURL}`} onClick={checkLoader}><button className='btn btn-md rounded btn-secondary hover:text-white w-full'>View profile</button></Link>


                                <div className='mx-4 xl:mx-0'>
                                    <label className='w-full btn btn-primary rounded hover:text-white' onClick={() => setAnotherLoader(doctor)} htmlFor="anotherdoctor-book-modal">Book an appointment</label>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherDoctor;