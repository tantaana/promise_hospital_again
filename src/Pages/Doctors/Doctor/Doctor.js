import React from 'react';
import { Link } from 'react-router-dom';
import './doctor.css'
const Doctor = ({ doctor }) => {
    console.log(doctor)
    const { doctorImg, location, sepecilaty, name, _id } = doctor
    return (

        // <div id="doctors-section" className="lg:px-20 sm:px-4">
        //     <div className="row grid gap-x-7 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1">

        //     </div>
        // </div>
        <div className=" flex " id="border-color2">
            <div className="img border-r-2 bg-white rounded-l-2xl  " id="border-color" >
                <img className="h-60 w-48 rounded-l-2xl " src={doctorImg} alt="" />
            </div>
            <div className="doctors-text py-4 pl-4 bg-white w-full rounded-r-2xl ">
                <h2 className="font-semibold text-2xl text-color">{name}</h2>
                <p className="text-gray-500 my-4">{sepecilaty}</p>
                <span className="">{location}</span> <br />
                <div className="mt-8">
                    <Link to={`/doctors/${_id}`} className="py-2 px-2 rounded btn1 mx-2">View profile</Link>
                    <button className="py-2 px-2 rounded btn2 mx-2">Book an appointment</button>
                </div>
            </div>
        </div>

    );
};

export default Doctor;