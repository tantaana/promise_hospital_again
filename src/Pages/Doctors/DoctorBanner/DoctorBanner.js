import React from 'react';
import './DoctorBanner.css'
const DoctorBanner = ({ doctors }) => {
    return (
        <div>


            <div style={{
                backgroundImage: `url('https://i.ibb.co/m8QTkbd/best-hospital-in-india.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className="w-full h-[450px] xl:h-[550px] 2xl:h-[600px]">
                <div className='w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold opacity-100 text-white mb-4 text-center mx-4'>Pick Your Desired <span className='text-teal-500 font-bold'>Doctor</span></h2>
                    <h2 className='text-white text-md lg:text-lg text-center mx-6'>Best doctor of the country are available in our hospital - Just make an appointment and get them on your desired time</h2>
                </div>

            </div>

        </div>
    );
};

export default DoctorBanner;