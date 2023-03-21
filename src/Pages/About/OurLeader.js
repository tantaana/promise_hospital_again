import React from 'react';
import Lone from './LeaderImg/Dr__Ballal (1).jpg'
import Ltwo from './LeaderImg/NK (1).jpg'
import Lthree from './LeaderImg/sowjal (1).jpg'
import './OurLeader.css'

const OurLeader = () => {
    return (

        <div class="container mx-auto w-full overflow-hidden relative bg-secondary">
            <h1 className='text-3xl text-center mt-3 mb-3 font-semibold text-slate-200'>Our Leadership</h1>
            {/* <div class="w-full h-full absolute">
                <div class="w-1/4 h-full absolute z-50 left-0 banner-style about-leader-shadow-1" ></div>
                <div class="w-1/4 h-full absolute z-50 right-0 about-leader-shadow-2" ></div>
            </div> */}
            <div class="about-leader-items flex items-center justify-center about-leader-banner-2" >
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lone} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Dr. H Sudarshan Ballal</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>

                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Ltwo} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Mr. Dilip Jose</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lthree} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Dr. H Sudarshan Ballal</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lone} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Mr. Partha Das</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lone} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Mr. Karthik Rajagopal</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lone} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">
                        Mr. Sameer Agarwal</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
                <div class="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: "270px", height: "300px" }}>
                    <img class="" src={Lone} alt="Img" />
                    <p class="text-teal-400 font-bold text-xl mb-3">

                        Mr. Nandkishor Dhomne</p>
                    <p class="mt-3 text-gray-600 text-center text-base font-semibold">Chairman, Promise Health Enterprises Pvt. Ltd.</p>
                </div>
            </div>

        </div>
    );
};

export default OurLeader;