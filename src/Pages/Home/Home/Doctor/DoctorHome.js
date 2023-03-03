import React, { useEffect } from 'react';
import { useState } from 'react';
import OneDoctor from './OneDoctor';
import docbg from '../Doctor/doc_bg.jpg'
import './DocHome.css'
import { Link } from 'react-router-dom';

const DoctorHome = () => {
    const [doctors, setDoctor] = useState([]);

    console.log("test", doctors)
    useEffect(() => {
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/docInfo?page=0&size=3`)
            .then(res => res.json())
            .then(data => setDoctor(data))

    }, [])
    return (




        <div className=" bg " style={{ backgroundImage: `url(${docbg})`, }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <p className='text-3xl font-semibold mb-2 justify-center text-center ' style={{ color: '#0038FF' }}>Our Doctors</p>
            <div className=" text-start ">
                <div className="">
                    <div className='grid lg:grid-cols-3 grid-cols-1  ml-20 p-2' style={{ marginRight: 500 }}>
                        {
                            doctors.slice(0, 3).map(doct => <OneDoctor
                                key={doct._id}
                                doct={doct}
                            ></OneDoctor>)
                        }


                    </div>
                    <div className='justify-end text-end px-40'>
                        <Link to='/doctors'>     <button className="bg-teal-500 h-12 w-36 rounded-xl text-white font-bold mb-6" > See All Doctors </button></Link></div>

                </div>
            </div>
        </div>

    );
};

export default DoctorHome;