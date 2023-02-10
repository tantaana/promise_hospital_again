import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const MyDetails = () => {
    const appointmentDetails = useLoaderData();

    return (
        <PhotoProvider>
            <div className='my-10 mx-4'>


                {
                    appointmentDetails ?
                        <>
                            <div className='mb-20 border border-black p-4 bg-yellow-100'>
                                <h2 className='text-3xl font-bold text-center mb-10'>Doctor Info</h2>

                                <div className='flex justify-center'>
                                    <div className='flex flex-col xl:flex-row items-center gap-20 p-10'>
                                        <img src={appointmentDetails?.doctorImg} className="border border-black w-[500px] h-[400px] object-cover" alt="" />

                                        <div className='flex flex-col gap-4'>
                                            <h2 className='text-2xl font-semibold text-blue-900'>Doctor Name: <span className='text-black'>{appointmentDetails?.docName}</span></h2>
                                            <h2 className='text-2xl font-semibold text-blue-900'>Location: <span className='text-black'>{appointmentDetails?.docLocation}</span></h2>
                                            <h2 className='text-2xl font-semibold text-blue-900'>Appointment Date: <span className='text-black'>{appointmentDetails?.appointDate}</span></h2>
                                            <h2 className='text-2xl font-semibold text-blue-900'>Fees: <span className='text-black font-bold'>{appointmentDetails?.fees}/-</span></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-black p-4 bg-yellow-100'>
                                <h2 className='text-3xl font-bold text-center mb-10'>My Info</h2>

                                <div className='flex justify-center'>
                                    <div className='flex flex-col-reverse xl:flex-row items-center gap-20 p-10'>
                                        <div className='flex flex-col gap-4 w-[300px] md:w-[600px]'>
                                            <h2 className='text-2xl font-semibold text-teal-700'>My Name: <span className='text-black'>{appointmentDetails?.patientName}</span></h2>
                                            <h2 className='text-2xl font-semibold text-teal-700'>Email: <span className='text-black'>{appointmentDetails?.patientEmail}</span></h2>
                                            <h2 className='text-2xl font-semibold text-teal-700'>Phone: <span className='text-black'>{appointmentDetails?.patientNumber}</span></h2>
                                            <h2 className='text-2xl font-semibold text-teal-700'>Country: <span className='text-black'>{appointmentDetails?.country}</span></h2>
                                            <h2 className='text-2xl font-semibold text-teal-700'>Language: <span className='text-black'>{appointmentDetails?.language}</span></h2>
                                            <h2 className='text-2xl font-semibold text-teal-700'>Health Info: <span className='text-black font-semibold break-normal w-[50px]'>❝ {appointmentDetails?.healthInfo} ❞</span></h2>
                                        </div>

                                        <div>
                                            <h2 className='text-center font-semibold text-xl mb-4'>Medical Image (Click to full view)</h2>
                                            <PhotoView src={appointmentDetails?.imageMedical}>
                                                <img src={appointmentDetails?.imageMedical} className="border border-black w-[500px] h-[400px] object-cover" alt="" />
                                            </PhotoView>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <p className='text-center text-4xl font-bold'>No data found ❌</p>
                }

            </div>
        </PhotoProvider>
    );
};

export default MyDetails;