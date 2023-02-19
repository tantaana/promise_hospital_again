import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorBookingForm from '../DoctorBookingForm/DoctorBookingForm';
import './doctor.css'
import circleImg from '../../../assets/loading-circle.gif'
import { MdLocationPin } from 'react-icons/md';

const Doctor = ({ doctor, setAnotherLoader }) => {
    const { doctorImg, location, speciality, position, name, _id, doctor_email } = doctor;
    const [loader, setLoader] = useState(false);


    const checkLoader = () => {
        setLoader(true);
        console.log(loader)

    }
    return (

        // <div className=" xl:flex border shadow-2xl scale-100 hover:scale-105" id="doctor-border-color2">
        //     <div className="img border-r-2 bg-white rounded-l-2xl flex justify-center items-center  " id="border-color" >
        //         <img className="object-cover w-full h-[250px] w-[300px] rounded-l-2xl" src={doctorImg} alt="" />
        //     </div>
        //     <div className="doctors-text py-4 pl-4 bg-white w-full rounded-r-2xl ">
        //         <h2 className="font-semibold text-2xl text-color">{name}</h2>
        //         <p className="text-gray-500 my-4">{speciality}</p>
        //         <span className="">{location}</span> <br />
        //         <div className="mt-8 flex gap-2">
        //             <Link to={`/doctors/${_id}`} onClick={checkLoader}><button className='btn btn-md rounded btn-primary hover:text-white'>View profile</button></Link>
        //             <div className='flex items-center'>
        //                 <label className='btn btn-secondary rounded hover:text-white' onClick={() => setAnotherLoader(doctor)} htmlFor="doctor-book-modal">Book an appointment</label>
        //                 <div>{loader ? <img src={circleImg} className='w-[30px] h-[30px]' alt="" /> : ''}</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


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

                                <Link className='mx-4 xl:mx-0' to={`/doctors/${_id}`} onClick={checkLoader}><button className='btn btn-md rounded btn-secondary hover:text-white w-full'>View profile</button></Link>


                                <div className='mx-4 xl:mx-0'>
                                    <label className='w-full btn btn-primary rounded hover:text-white' onClick={() => setAnotherLoader(doctor)} htmlFor="doctor-book-modal">Book an appointment</label>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Doctor;