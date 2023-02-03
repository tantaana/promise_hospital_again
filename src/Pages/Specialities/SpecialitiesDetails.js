import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DoctorBookingForm from '../Doctors/DoctorBookingForm/DoctorBookingForm';
import bg1 from "../Specialities/SpecialitiesImg/spbg.jpg"
import bg2 from "../Specialities/SpecialitiesImg/bg1.jpg"

const SpecialitiesDetails = () => {
    const detail = useLoaderData();
    return (
        <div style={
            {
                background: `url(${bg1})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div className='grid lg:grid-cols-1 sm:grid-cols-1'>
                <img src={bg2} className='w-full ' style={{ height: 400 }} alt="" />
                <div className='justify-between flex'>
                    <p className='text-blue-600 font-bold text-3xl p-5  '>{detail.title}</p>
                   
                    <div className=" flex ">
                    <p className='text-blue-600 font-bold text-3xl p-5'>Cost : {detail.amount} tk</p>
                     <p className='p-5'><label htmlFor="doctor-book-modal"  className="text-xl mt-10  bg-green-800   p-3 rounded-xl  w-48  hover hover:bg-sky-200 font-bold text-zinc-100">Confirm</label></p>   
                    </div>
                </div>
                <div className='flex gap-8  '>
                  
                    <div className=''>

                        <p className='p-5'>
                            <p className='text-xl'>Hello, I'm</p>
                            <h4 className='text-3xl font-bold text-cyan-900'>Dr.{detail.docName}</h4>

                            <h4 className='text-sm font-bold text-cyan-900 mt-7'>{detail.qualification}</h4>
                            <p className='text-xl mt-2'>  Expart : {detail.name}</p>
                            <p className='text-xl mt-2'>  @Email : {detail.email}</p>

                        </p>
                    </div>
                    {/* <button htmlFor="doctor-book-modal" className='text-2xl bg-cyan-400 h-10 mt-60 mr-6 w-44 rounded-2xl hover hover:bg-sky-200 font-bold text-zinc-100'> Confirm</button> */}
                    
                </div>
            </div>
            <p className='text-blue-600  text-xl p-5 bg-slate-400'> {detail.det}</p>

            <input type="checkbox" id="doctor-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="doctor-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <DoctorBookingForm></DoctorBookingForm>
                </div>
            </div>
        </div>
    );
};

export default SpecialitiesDetails;