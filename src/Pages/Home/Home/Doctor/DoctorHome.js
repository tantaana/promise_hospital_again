import React, { useEffect } from 'react';
import { useState } from 'react';
import OneDoctor from './OneDoctor';
import docBg from '../Doctor/doc_bg.jpg'
import './DoctorHome.css'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const DoctorHome = () => {
    const [doctors, setDoctors] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/docInfo`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                setLoader(false);
            })
        // ?page=0&size=3
    }, [])


    return (

        <PhotoProvider>
            <div style={{
                backgroundImage: `url(${docBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className="border border-transparent my-16 lg:my-28 overflow-hidden">
                <h1 className='text-3xl text-center my-8 font-bold text-white'>Our Leaders</h1>

                <div className='flex justify-center items-center my-4'>
                    {
                        loader ?
                            <div class="flex flex-col">
                                <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-white border-t-transparent shadow-md"></div>


                            </div> : ''
                    }
                </div>



                {/* <div>
                    <div class="flex imagePlay border border-black" >
                        {
                            doctors.slice(0, 5).map(doctor =>

                                <div class="hover:scale-110 ease-in-out duration-500 flex items-center flex-col relative bg-white mx-10 my-10 px-4 py-4 rounded-xl shadow-2xl w-[300px] md:w-[350px] lg:w-[400px]">
                                    <PhotoView src={doctor?.doctorImg}>
                                        <img src={doctor?.doctorImg} className="mb-4 shadow-2xl rounded-t-xl cursor-zoom-in" alt="Img" />
                                    </PhotoView>
                                    <p class="text-teal-500 font-bold text-xl mb-3 text-center">{doctor?.name}</p>
                                    <p class="text-gray-600 font-semibold text-md text-center h-[50px] w-full flex items-center justify-center">{doctor?.position}</p>
                                    <div className="border border-teal-500 w-2/3 rounded-xl my-1"></div>
                                    <p class="text-blue-900 font-semibold text-lg h-[50px] w-full text-center flex justify-center items-center">{doctor?.speciality}</p>

                                </div>


                            )
                        }
                    </div>
                </div> */}


                <div className='slider'>
                    {
                        doctors.slice(0, 5).map((doctor, index) =>
                            <span className='sliderDiv border border-black bg-white'>
                                {/* <PhotoView src={doctor?.doctorImg}> */}
                                <img src={doctor?.doctorImg} className="" alt="Img" />
                                {/* </PhotoView> */}
                                <p class="text-teal-500 font-bold text-xl mb-3 text-center">{doctor?.name}</p>
                                <p class="text-gray-600 font-semibold text-md text-center h-[50px] w-full flex items-center justify-center">{doctor?.position}</p>
                                <div className="border border-teal-500 w-2/3 rounded-xl my-1"></div>
                                <p class="text-blue-900 font-semibold text-lg h-[50px] w-full text-center flex justify-center items-center">{doctor?.speciality}</p>

                            </span>

                        )
                    }
                </div>

                <div className='flex justify-center'>
                    <Link to='/doctors'><button className='btn btn-primary border-none glass bg-sky-600 hover:bg-teal-500 rounded-none mb-10'>View All Doctors</button></Link>
                </div>
            </div>
        </PhotoProvider>

    );
};

export default DoctorHome;