import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import Advertise from '../Pages/Shared/Advertise/Advertise';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav1 from '../Pages/Shared/Navber/Nav1/Nav1';
import Nav2 from '../Pages/Shared/Navber/Nav2/Nav2';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const activeLinks = ({ isActive }) => {
        return {
            backgroundColor: isActive ? '#034ea1' : 'transparent',
        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };
    return (
        <div>
            <Advertise></Advertise>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <div className='flex justify-center'>
                        <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline w-1/2 drawer-button lg:hidden font-bold my-6">Dashboard</label>
                    </div>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu text-lg p-4 w-80 bg-gradient-to-r from-blue-900 to-teal-500">
                        <NavLink to='/dashboard' className="text-xl text-white text-center font-semibold bg-blue-900 border-teal-500 border-4 pb-2 mb-10">Dashboard <span className='text-4xl'>💼</span></NavLink>

                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/add_services' style={activeLinks} className="text-lg text-white font-semibold p-2">Add Services With Doctor Info</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/show_services' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Show Services</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/add_package' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Add Health Package</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/add_diagnosis' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Add Diagnosis</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/show_package' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Show Package</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/add_doctors' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Add a Doctor</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/appointments' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">My Appointments</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/all_users' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">All User Info</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/VirtualAppointment' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Virtual Appointment</NavLink></li>
                        <li onClick={handleClick} className='text-white hover:bg-teal-600 hover:rounded-lg'><NavLink to='/dashboard/doctorVirtualAppointment' style={activeLinks} className="text-lg text-white font-semibold hover:rounded-lg p-2">Doctor Virtual Appointment</NavLink></li>
                    </ul >

                </div >
            </div >


        </div >
    );
};

export default DashboardLayout;