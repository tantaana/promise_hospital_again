import React from 'react';
import { NavLink } from 'react-router-dom';

const DefaultNav = () => {
    const activeLinks = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'rgb(30, 58, 138)' : '',
            color: isActive ? 'white' : '',
        }
    }

    return (
        <div className='bg-teal-400 flex justify-center p-2'>
            <div className='bg-teal-500 flex flex-wrap justify-center gap-4 shadow-2xl p-10 rounded-xl'>
                <NavLink to='/quote' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Get Quote</NavLink>
                <NavLink to='/assistance' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Visa Assistance</NavLink>
                <NavLink to='/accomodation' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Accomodation and Transport</NavLink>
                <NavLink to='/plan/insurance' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Insurance Partner</NavLink>
                <NavLink to='/plan/arrival' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Arrival and Standard Process</NavLink>
                <NavLink to='/plan/discharge' style={activeLinks} className='text-blue-900 sm:text-lg text-md font-semibold rounded-lg bg-white py-2 px-6 hover:bg-blue-900 hover:text-white text-center'>Discharge and Departure</NavLink>
            </div>
        </div>
    );
};

export default DefaultNav;