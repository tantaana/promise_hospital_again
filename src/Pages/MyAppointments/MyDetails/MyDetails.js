import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MyDetails = () => {
    const appointmentDetails = useLoaderData();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <PhotoProvider>
            <div className='my-16 mx-4'>

                <div className='mx-4 my-4'>
                    <button onClick={goBack} className="bg-teal-500 hover:bg-teal-400 font-semibold px-4 py-2 rounded flex items-center w-32 gap-2 "><AiOutlineArrowLeft /> <span>Go back</span></button>
                </div>


                <div>
                    {
                        appointmentDetails ?
                            <>
                                <h2 className='text-3xl font-bold text-center mb-40 2xl:mb-28'>Doctor's Info</h2>
                                <div className='flex justify-center mb-20'>
                                    <div className='mb-20 md:w-[700px] w-[900px] border-4 border-blue-900 rounded-xl'>
                                        <div className='p-10'>
                                            <div className='flex flex-col 2xl:flex-row gap-4 items-center 2xl:items-start'>
                                                <PhotoView src={appointmentDetails?.doctorImg}>
                                                    <img src={appointmentDetails?.doctorImg} className="border-4 border-teal-500 object-cover rounded-xl mt-[-150px] 2xl:mt-[-100px] 2xl:ml-[-200px] w-[350px] md:w-[400px] 2xl:w-[400px] 2xl:h-[300px]" alt="" />
                                                </PhotoView>

                                                <div className='flex flex-col gap-4'>
                                                    <h2 className='text-2xl font-semibold text-blue-900'>Doctor Name: <span className='text-black'>{appointmentDetails?.docName}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-blue-900'>Location: <span className='text-black'>{appointmentDetails?.docLocation}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-blue-900'>Appointment Date: <span className='text-black'>{appointmentDetails?.appointDate}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-blue-900'>Fees: <span className='text-black font-bold'>{appointmentDetails?.fees}/-</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className='text-3xl font-bold text-center mt-4 mb-40 2xl:mb-28'>My Info</h2>
                                <div className='flex justify-center mb-20'>
                                    <div className='mb-20 md:w-[700px] 2xl:w-[750px] border-4 border-blue-900 rounded-xl'>
                                        <div className='p-10'>
                                            <div className='flex flex-col 2xl:flex-row-reverse items-center 2xl:items-start gap-4'>
                                                <PhotoView src={appointmentDetails?.imageMedical}>
                                                    <img src={appointmentDetails?.imageMedical} className="border-4 border-teal-500 object-cover rounded-xl mt-[-150px] 2xl:mt-[-100px] 2xl:mr-[-250px] w-[350px] md:w-[450px] 2xl:w-[400px] 2xl:h-[400px]" alt="" />
                                                </PhotoView>

                                                <div className='flex flex-col gap-4 2xl:w-[600px]'>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>My Name: <span className='text-black'>{appointmentDetails?.patientName}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>Email: <span className='text-black'>{appointmentDetails?.patientEmail}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>Phone: <span className='text-black'>{appointmentDetails?.patientNumber}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>Country: <span className='text-black'>{appointmentDetails?.country}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>Language: <span className='text-black'>{appointmentDetails?.language}</span></h2>
                                                    <h2 className='text-2xl font-semibold text-teal-700'>Health Info: <span className='text-black font-semibold break-normal w-[50px]'>❝ {appointmentDetails?.healthInfo} ❞</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <p className='text-center text-4xl font-bold'>No data found ❌</p>
                    }
                </div>

            </div>
        </PhotoProvider>
    );
};

export default MyDetails;