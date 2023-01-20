import React from 'react';
import './DoctorBanner.css'
const DoctorBanner = ({ doctors }) => {
    return (
        <div>
            <div id="doctors-hero" className="">
                <div className="p-20  text-right lg:px-8 sm:px-4 ">
                    <div id="btn" className="">
                        <a href="/" className="bg-white inline-block font-bold py-2  px-8 rounded md:text-sm sm:text-sm" id="btn-video-consulation">Video consultation</a>
                    </div>
                    <div id="btn" className="mt-2">
                        <a href="/" className="bg-gray-300 border-2 inline-block font-bold py-2 px-8 rounded md:text-sm sm:text-sm" id="btn-video-consulation">Video consultation</a>
                    </div>
                </div>
            </div>
            <div id="search" className=" p-20 lg:p-20 sm:p-4 hidden md:block">
                <div id="border-color" className="form-group grid grid-cols-4 border-2  rounded-2xl">
                    <select name="" id="border-color" className="p-4 border-r-2 rounded-l-2xl text-slate-500">
                        <option value="sepecilaty">sepecilaty</option>
                        {
                            doctors.map((doctor, index) => <option key={index} value="0">{doctor.sepecilaty}</option>)
                        }
                    </select>
                    <select name="" id="border-color" className="p-4 border-r-2  text-slate-500">
                        <option value="sepecilaty">Location</option>
                        {
                            doctors.map((doctor, index) => <option key={index} value="0">{doctor.location}</option>)
                        }
                    </select>
                    <select name="" className="p-4 border-r-2 text-slate-500">
                        <option value="sepecilaty">Search by Doctor Name</option>
                        {
                            doctors.map((doctor, index) => <option key={index} value="0">{doctor.name}</option>)
                        }
                    </select>
                    <button id="liner-gradin" className="rounded-xl text-white center">
                        <i className="fa-solid fa-magnifying-glass font-bold"></i>
                        <span className="font-semibold ml-1">Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorBanner;