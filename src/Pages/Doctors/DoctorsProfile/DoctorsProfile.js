import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './doctorProfile.css'

const DoctorsProfile = () => {
    const doctorData = useLoaderData()
    console.log(doctorData)
    const { name, location, sepecilaty, qualification, doctorImg, locationImg } = doctorData
    return (
        <div className='h-screen'>
            <div style={{
                backgroundImage: `url(${locationImg})`
            }} id="doctors-view-page" className="xl:p-20 lg:p-16 md:p-10 sm:p-8 p-4 block bg-center bg-cover">
                <div className="back-btn  ">
                    <a href="/" className="bg-white px-4 py-2 rounded"><i className="fa-solid fa-left-long "></i> Go back</a>
                </div>

                <div id="doctors-profile" className="xl:m-20 lg:m-10 sm:mt-8">
                    <div className="row mt-44">
                        <div className="col">
                            <img className="w-80 border-4 xl:ml-8 md:ml-40 sm:ml-32 bottom-margin shadow-md rounded" src={doctorImg} alt="" />
                            <div className=" grid xl:grid-cols-2 lg:grid-cols-1 border-4 bg-white py-20 px-8 rounded-2xl">
                                <div className="left ">
                                    <div className="item flex items-center mt-8">
                                        <i className="fa-solid fa-user text-4xl primary-color"></i>
                                        <div className="ml-4">
                                            <h2 className="primary-color font-bold text-xl">{name}</h2>
                                            <p className="text-gray-500 text-sm">{sepecilaty}</p>
                                        </div>
                                    </div>
                                    <div className="item flex items-center mt-8">
                                        <i className="fa-solid fa-location-dot text-4xl primary-color"></i>
                                        <div className="ml-4">
                                            <p className="text-gray-500 text-sm font-bold">{location}</p>
                                        </div>
                                    </div>
                                    <div className="item flex mt-8">

                                        <i className="fa-solid fa-id-card text-4xl primary-color"></i>
                                        <div className="ml-4">
                                            <h2 className="primary-color font-bold text-xl">Qualification</h2>
                                            <p className="text-gray-500 text-sm h-20 overflow-y-auto ">{qualification}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right mt-8">
                                    <a href="/" className="btn px-8 py-4 rounded font-bold">Get a second opinion</a>
                                    <a href="/" className="btn px-8 py-4 rounded font-bold">Video consultation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsProfile;