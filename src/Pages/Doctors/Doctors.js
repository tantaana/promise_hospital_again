import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import DoctorBanner from './DoctorBanner/DoctorBanner';
import DoctorBookingForm from './DoctorBookingForm/DoctorBookingForm';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://server-new-rokibul-bd.vercel.app/doctors')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            })
    }, [])
    return (
        <>
            <DoctorBanner doctors={doctors}></DoctorBanner>
            <div className='grid md:grid-cols-2 gap-8 mt-8 md:w-11/12 w-10/12 mx-auto'>

                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </div>
        </>
    );
};

export default Doctors;