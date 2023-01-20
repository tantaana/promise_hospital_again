import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DoctorBookingForm from '../DoctorBookingForm/DoctorBookingForm';
// import DoctorFellowship from './DoctorFellowship/DoctorFellowship';
import './doctorProfile.css'
// import FellowShipTabs from './FellowShipTabs/FellowShipTabs';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBookReader } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import DoctorOpinionForm from './DoctorOpinionForm/DoctorOpinionForm';

const DoctorsProfile = () => {
    const doctorData = useLoaderData()
    const { name, location, sepecilaty, qualification, doctorImg, locationImg } = doctorData
    return (
        <div className='mb-36'>
            <div className='h-screen'>
                <div id="doctors-view-page" style={{
                    backgroundImage: `url(${locationImg})`
                }} className="xl:p-20 lg:p-16 md:p-10 sm:p-8 p-4 bg-center bg-cover">
                    <div className="back-btn  ">
                        <Link to="/doctors" className="bg-white px-4 py-2 rounded flex items-center w-32 gap-2"><AiOutlineArrowLeft /> <span>Go back</span></Link>
                    </div>

                    <div id="doctors-profile" className="xl:m-20 lg:m-10 sm:mt-8 mb-16">
                        <div className="row mt-44">
                            <div className="col">
                                <img className="w-80 border-4 xl:ml-8 md:ml-40 sm:ml-32 bottom-margin shadow-md rounded" src={doctorImg} alt="" />
                                <div className=" grid xl:grid-cols-2 lg:grid-cols-1 border-4 bg-white py-20 px-8 rounded-2xl">
                                    <div className="left ">
                                        <div className="item flex items-center mt-8">
                                            <i className="fa-solid fa-user text-4xl primary-doctor-color"></i>
                                            <div className="ml-4">
                                                <h2 className="primary-color font-bold text-xl flex items-center gap-2"><FaUserCircle />{name}</h2>
                                                <p className="text-gray-500 text-sm">{sepecilaty}</p>
                                            </div>
                                        </div>
                                        <div className="item flex items-center mt-8">
                                            <i className="fa-solid fa-location-dot text-4xl primary-doctor-color"></i>
                                            <div className="ml-4">
                                                <p className="text-gray-500 text-sm font-bold flex items-center gap-2"><HiOutlineLocationMarker />{location}</p>
                                            </div>
                                        </div>
                                        <div className="item flex mt-8">

                                            <i className="fa-solid fa-id-card text-4xl primary-doctor-color"></i>
                                            <div className="ml-4">
                                                <h2 className="primary-doctor-color font-bold text-xl flex items-center gap-2"><BiBookReader /> Qualification</h2>
                                                <p className="text-gray-500 text-sm h-20 overflow-y-auto ">{qualification}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right mt-8">
                                        <label htmlFor="doctor-opinion-modal" className="btn px-8 py-4 rounded font-bold btn-doctor">Get a second opinion</label>
                                        <label htmlFor='doctor-booking-modal-profile' className="btn px-8 py-4 rounded font-bold btn-doctor">Video consultation</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" id="doctor-booking-modal-profile" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <label htmlFor="doctor-booking-modal-profile" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <DoctorBookingForm></DoctorBookingForm>
                            </div>
                        </div>
                        <input type="checkbox" id="doctor-opinion-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">
                                <label htmlFor="doctor-opinion-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <DoctorOpinionForm></DoctorOpinionForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container mt-56 px-20'>
                <div className='row grid xl:grid-cols-2 lg:grid-cols-2 text-ariya-border-color rounded-xl'>
                    <div>
                        {
                            fellowship.map((tabs, index) => <FellowShipTabs tabs={tabs} key={index}></FellowShipTabs>)
                        }
                    </div>
                    <div className='h-96 overflow-y-scroll'>
                        {
                            fellowship.map((fellow, index) => <DoctorFellowship key={index} fellow={fellow}></DoctorFellowship>)
                        }
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default DoctorsProfile;