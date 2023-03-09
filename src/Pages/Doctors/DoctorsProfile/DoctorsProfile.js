import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './doctorProfile.css'
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BiBookReader } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import bgImg from '../../../assets/promise.jpg'
import bgImgSmall from '../../../assets/promise-small.jpg'
import DoctorDetailsLayout from '../../../Layout/DoctorDetailsLayout';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const DoctorsProfile = () => {
    const doctorData = useLoaderData()
    const { name, location, speciality, qualification, doctorImg, position } = doctorData;

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        // <div className='lg:mb-40 mb-52'>
        //     <div className='h-screen mb-20'>
        //         <div id="doctors-view-page" style={{
        //             backgroundImage: `url(${bgImg})`
        //         }} className="xl:p-20 lg:p-16 md:p-10 sm:p-8 p-4 bg-center bg-cover">
        //             <div className="back-btn  ">
        //                 <button onClick={goBack} className="bg-white hover:bg-gray-400 font-bold px-4 py-2 rounded flex items-center w-32 gap-2 "><AiOutlineArrowLeft /> <span>Go back</span></button>
        //             </div>

        //             <div id="doctors-profile" className="xl:m-20 lg:m-10 sm:mt-8 mb-16">
        //                 <div className="row mt-44">
        //                     <div className="col">
        //                         <img className="w-[400px] lg:w-[500px] lg:h-[350px] border-4 xl:ml-8 md:ml-40 sm:ml-32 bottom-margin shadow-md rounded object-cover" src={doctorImg} alt="" />
        //                         <div className=" grid xl:grid-cols-2 lg:grid-cols-1 border-4 bg-white py-20 px-8 rounded-2xl shadow-2xl ">
        //                             <div className="left ">
        //                                 <div className="item flex items-center mt-8">
        //                                     <i className="fa-solid fa-user text-4xl primary-doctor-color"></i>
        //                                     <div className="ml-4">
        //                                         <h2 className="primary-color font-semibold text-xl lg:text-2xl flex items-center gap-2 text-blue-900 mb-2"><span className='text-3xl text-blue-900'><FaUserCircle /></span>{name}</h2>
        //                                         <p className="text-gray-500 text-md font-semibold ml-10">{position} - {speciality}</p>
        //                                     </div>
        //                                 </div>
        //                                 <div className="item flex items-center mt-8">
        //                                     <i className="fa-solid fa-location-dot text-4xl primary-doctor-color"></i>
        //                                     <div className="ml-4">
        //                                         <p className="text-lg font-bold flex items-center gap-2"><span className='text-3xl text-blue-900'><MdLocationPin /></span> {location}</p>
        //                                     </div>
        //                                 </div>
        //                                 <div className="item flex mt-8">

        //                                     <i className="fa-solid fa-id-card text-4xl primary-doctor-color"></i>
        //                                     <div className="ml-4">
        //                                         <h2 className="primary-color font-semibold text-xl lg:text-2xl flex items-center gap-2 text-blue-900 mb-2"><span className='text-3xl text-blue-900'><BiBookReader /></span> Qualification</h2>
        //                                         <p className="text-black text-md font-semibold ml-10">{qualification}</p>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>



        //     <DoctorDetailsLayout doctorData={doctorData}></DoctorDetailsLayout>
        // </div>

        <PhotoProvider>
            <div>
                <div style={{
                    backgroundImage: `url(${bgImgSmall})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="w-full h-[450px] xl:h-[550px] 2xl:h-[600px] lg:hidden rounded-b-2xl">
                    <div className='border border-transparent h-full'>
                        <button onClick={goBack} className="bg-white hover:bg-gray-400 font-semibold py-1 mt-6 ml-6 rounded flex justify-center items-center w-32 gap-2"><AiOutlineArrowLeft /> <span>Go back</span></button>
                    </div>


                </div>

                {/* ---------------------------------------------------- */}

                <div style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className="w-full h-[450px] xl:h-[550px] 2xl:h-[600px] hidden lg:block rounded-b-3xl">
                    <div className='border border-transparent h-full'>
                        <button onClick={goBack} className="bg-white hover:bg-gray-400 font-bold px-4 py-2 mt-10 ml-10 rounded flex justify-center items-center w-32 gap-2 "><AiOutlineArrowLeft /> <span>Go back</span></button>
                    </div>

                </div>

                <div className='flex justify-center mt-[-60px] mb-20 shadow-none'>
                    <div className='bg-white w-5/6 rounded-xl shadow-2xl'>

                        <PhotoView src={doctorImg}>
                            <img src={doctorImg} className="border-4 border-white mt-[-100px] xl:mt-[-200px] ml-[40px] shadow-2xl w-[250px] md:w-[300px] xl:w-[400px] 2xl:w-[500px] h-[180px] md:h-[200px] xl:h-[300px] 2xl:h-[350px] object-cover mb-10 cursor-zoom-in" alt="" />
                        </PhotoView>

                        <h2 className="primary-color font-semibold text-xl lg:text-2xl flex items-center gap-4 text-blue-900 mb-2 ml-[40px]"><span className='text-3xl text-blue-900'><FaUserCircle /></span>{name}</h2>

                        <p className="text-black text-sm lg:text-lg font-semibold ml-[88px] mb-6">{position} - <span className='text-gray-600'>{speciality}</span></p>

                        <p className="text-md lg:text-xl font-semibold flex items-center gap-4 ml-[40px] mb-6"><span className='text-3xl text-blue-900'><MdLocationPin /></span> {location}</p>

                        <h2 className="primary-color font-semibold text-xl lg:text-2xl flex items-center gap-4 text-blue-900 mb-2 ml-[40px]"><span className='text-3xl text-blue-900'><BiBookReader /></span> Qualification</h2>

                        <p className="text-black text-md lg:text-lg font-semibold ml-[88px] mr-4 mb-10">{qualification}</p>
                    </div>
                </div>

                <DoctorDetailsLayout doctorData={doctorData}></DoctorDetailsLayout>
            </div>
        </PhotoProvider>
    );
};

export default DoctorsProfile;