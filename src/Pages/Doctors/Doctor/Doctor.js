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

        // <div id="doctors-section" className="lg:px-20 sm:px-4">
        //     <div className="row grid gap-x-7 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1">

        //     </div>
        // </div>
        <div className=" lg:flex border shadow-2xl" id="doctor-border-color2">
            <div className="img border-r-2 bg-white rounded-l-2xl  " id="border-color" >
                <img className="object-cover h-full w-full rounded-l-2xl" src={doctorImg} alt="" />
            </div>
            <div className="doctors-text py-4 pl-4 bg-white w-full rounded-r-2xl ">
                <h2 className="font-semibold text-2xl text-color">{name}</h2>
                <p className="text-gray-500 my-4">{sepecilaty}</p>
                <span className="">{location}</span> <br />
                <div className="mt-8 flex flex-col xl:flex-row gap-2">
                    <Link to={`/doctors/${_id}`} onClick={checkLoader} className="py-2 px-2 rounded doctor-btn1 mx-2 block md:inline w-[100px]">View Profile
                    </Link>
                    <div className='flex items-center'>
                        <label onClick={() => setAnotherLoader(doctor)} htmlFor="doctor-book-modal" className="py-2 px-2 rounded doctor-btn2 mx-2 block md:inline mt-2 md:mt-0 w-[170px] btn">Book an appointment</label>
                        <>{loader ? <img src={circleImg} className='w-[30px] h-[30px]' alt='' /> : ''}</>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Doctor;