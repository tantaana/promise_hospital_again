import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorBookingForm from '../DoctorBookingForm/DoctorBookingForm';
import './doctor.css'
import circleImg from '../../../assets/loading-circle.gif'

const Doctor = ({ doctor, setAnotherLoader }) => {
    const { doctorImg, location, sepecilaty, name, _id } = doctor;
    const [loader, setLoader] = useState(false);

    const checkLoader = () => {
        setLoader(true);
        console.log(loader)

    }
    return (

        <div className=" xl:flex border shadow-2xl scale-100 hover:scale-105" id="doctor-border-color2">
            <div className="img border-r-2 bg-white rounded-l-2xl  " id="border-color" >
                <img className="object-cover h-full w-full rounded-l-2xl" src={doctorImg} alt="" />
            </div>
            <div className="doctors-text py-4 pl-4 bg-white w-full rounded-r-2xl ">
                <h2 className="font-semibold text-2xl text-color">{name}</h2>
                <p className="text-gray-500 my-4">{sepecilaty}</p>
                <span className="">{location}</span> <br />
                <div className="mt-8 2xl:flex-row flex flex-col gap-2">
                    <Link to={`/doctors/${_id}`} onClick={checkLoader}><button className='btn btn-md rounded btn-primary hover:text-white'>View profile</button></Link>
                    <div className='flex items-center'>
                        <label className='btn btn-secondary rounded hover:text-white' onClick={() => setAnotherLoader(doctor)} htmlFor="doctor-book-modal">Book an appointment</label>
                        <div>{loader ? <img src={circleImg} className='w-[30px] h-[30px]' alt="" /> : ''}</div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Doctor;