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

    // const images = [
    //     {
    //         _id: 1,
    //         img: 'https://i.ibb.co/HpZfgc8/img2.png',
    //         name: " Bariatric Surgery ",
    //     },
    //     {
    //         _id: 2,
    //         img: 'https://i.ibb.co/qWsDcS5/img3.png',
    //         name: " Cardiology and Cardiac surgery"
    //     },
    //     {
    //         _id: 3,
    //         img: 'https://i.ibb.co/8DC35Tc/img4.png',
    //         name: "Cardiothoracic Vascular Surgery"
    //     },
    //     {
    //         _id: 4,
    //         img: 'https://i.ibb.co/bzDjwhj/img5.png',
    //         name: "General Surgery"
    //     },
    //     {
    //         _id: 5,
    //         img: 'https://i.ibb.co/fpY5ZX8/img6.png',
    //         name: "Dermatology"
    //     },
    //     {
    //         _id: 6,
    //         img: 'https://i.ibb.co/Q84NphX/img7.png',
    //         name: 'Ear, Nose & Throat'
    //     },
    //     {
    //         _id: 7,
    //         img: 'https://i.ibb.co/K2RvKBT/img8.png',
    //         name: 'Ophthalmology'
    //     },
    //     {
    //         _id: 8,
    //         img: 'https://i.ibb.co/5WVpfsH/img9.png',
    //         name: 'Urologimg'
    //     },
    //     {
    //         _id: 9,
    //         img: "https://i.ibb.co/th63Zg8/img10.png",
    //         name: 'Spine Care'
    //     },]
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


<<<<<<< HEAD

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-10' style={
=======
<<<<<<< HEAD
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-10' style={
=======
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10' style={
>>>>>>> semi
>>>>>>> e895e70fa10cdc173c949e4b7f850aa4ae5d198b
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