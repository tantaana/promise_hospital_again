import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DoctorBookingForm from '../Doctors/DoctorBookingForm/DoctorBookingForm';
import bg1 from "../Specialities/SpecialitiesImg/spbg.jpg"
import bg2 from "../Specialities/SpecialitiesImg/bg1.jpg"
import Doctor from '../Doctors/Doctor/Doctor';

const SpecialitiesDetails = () => {
    const detail = useLoaderData();
    const [docInfo, setDocInfo] = useState([])
    // console.log(specialities)
    useEffect(() => {
        fetch('http://localhost:5000/docInfo')
            .then(res => res.json())
            .then(data => setDocInfo(data))
    }, []);

    const result = docInfo.filter(info => info.category_id === detail.category_id)
    console.log("info", result)

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


                </div>

            </div>
            <p className='text-blue-600  text-xl p-5 bg-slate-400'> {detail.det}</p>

            <input type="checkbox" id="doctor-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="doctor-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <DoctorBookingForm></DoctorBookingForm> */}
                </div>
            </div>
            <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:w-11/12 w-10/12 mx-auto mb-10'>

{
    result.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
}

</div>
               
            </div>
        </div>
    );
};

export default SpecialitiesDetails;