import React, { useState } from 'react';
import bg from '../Specialities/SpecialitiesImg/spbg.jpg'
import sbg from '../Specialities/SpecialitiesImg/servicebg.jpg'
import OurSeciality from './OurSeciality';
import { useEffect } from 'react';

const OurSpecialities = () => {


    const [specialities, setSpecialities] = useState([]);
    useEffect(() => {
        fetch('https://promise-hospoital-server.vercel.app/specialities')
            .then(res => res.json())
            .then(data => setSpecialities(data))
    }, []);

    return (
        <div
            style={
                {
                    background: `url(${bg})`,
                    padding: 20,
                    height: '100%',

                }
            }>
            <div className='text-end justify-end  style={{width:00}}'>
                <div className='justify-end '>
                    <select className="  w-96 p-2 h-12 border-2 border-cyan-900 ">
                        <option className='font-bold'> See Our Location </option>
                        <option>Uttora - Dhaka</option>
                        <option>Dhanmond - Dhaka</option>
                        <option>Chittagong</option>
                        <option>Feni</option>
                        <option>Khulna</option>
                    </select>
                    <div>
                    </div>

                    <div className='  bg-gradient-to-r from-sky-700 to-green-400 hover:from-pink-500 hover:to-yellow-500 ml-5 rounded-2xl'>
                        {/* <button type='button' className='border-y-sky-400 w-40 text-center mt-4 text-white' style={{ border: '#034ea1' }} >Search</button> */}
                    </div>

                </div>
            </div>
            <p className='mt-7 text-3xl font-bold  mb-5 text-center' style={{ color: '#034ea1', }} >All Our Specialities</p>


            





            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-10' style={

                {
                    background: `url(${sbg})`,
                    padding: 20,
                    height: '100%',

                }
            }>

                {
                    specialities.map(imag => <OurSeciality
                        key={imag._id}
                        imag={imag}
                    ></OurSeciality>)

                }
            </div>

        </div>
    );
};

export default OurSpecialities;