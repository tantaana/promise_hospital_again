import React, { useEffect, useState } from 'react'
import './HealthPackages.css'
import Packages from '../Packages/Packages'

const HealthPackages = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    // console.log(packages)
    return (
        <div>
            <div className='packes'>
                <div className='lg:flex lg:justify-end sm:pt-10'>
                    <div className='mt-10 pr-10'>
                        <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white block mb-3'>Video consulation</button>
                        <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white'>Get a second opinion</button>
                    </div>
                </div>
            </div>
            <div className='package pt-10'>
                {/* <div className='text-center mt-5 lg:flex sm:block lg:justify-center'>
                    <select className="select select-bordered max-w-xs ms-2 rounded-r-none">
                        <option disabled>Select Your Hospital Loacation</option>
                        <option>Old Airport Road - Bangalore</option>
                    </select>
                    <select className="select select-bordered max-w-xs rounded-l-none rounded-r-none">
                        <option disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                    </select>
                    <button type='button' className='bg-green-500 border-none text-white font-semibold hover:bg-green-600 btn search-btn rounded-l-none w-2/12'>Search</button>
                </div> */}

                <div id="search" className=" p-20 lg:p-20 sm:p-4 hidden md:block">
                    <div id="border-color" className="form-group grid grid-cols-4 border-2  rounded-2xl">
                        <select name="" id="border-color" className="p-4 border-r-2 rounded-l-2xl text-slate-500">
                            <option value="sepecilaty">Speciality</option>
                            {/* {
                                doctors.map((doctor, index) => <option key={index} value="0">{doctor.sepecilaty}</option>)
                            } */}
                        </select>
                        <select name="" id="border-color" className="p-4 border-r-2  text-slate-500">
                            <option value="sepecilaty">Location</option>
                            {/* {
                                doctors.map((doctor, index) => <option key={index} value="0">{doctor.location}</option>)
                            } */}
                        </select>
                        <select name="" className="p-4 border-r-2 text-slate-500">
                            <option value="sepecilaty">Search by Doctor Name</option>
                            {/* {
                                doctors.map((doctor, index) => <option key={index} value="0">{doctor.name}</option>)
                            } */}
                        </select>
                        <button id="liner-gradin" className="rounded-xl text-white center">
                            <i className="fa-solid fa-magnifying-glass font-bold"></i>
                            <span className="font-semibold ml-1">Search</span>
                        </button>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='text-center'>
                        <h2 className='text-4xl mt-10 text-blue-800'>Popular Packages</h2>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10'>
                        {
                            packages.map(pk => <Packages key={pk._id} pk={pk}></Packages>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthPackages;