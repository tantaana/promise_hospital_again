import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Advertise from '../Pages/Shared/Advertise/Advertise';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav1 from '../Pages/Shared/Navber/Nav1/Nav1';
import Nav2 from '../Pages/Shared/Navber/Nav2/Nav2';

const DashboardLayout = () => {
    return (
        <div>
            <Advertise></Advertise>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <div className='flex justify-center'>
                        <label htmlFor="my-drawer-2" className="btn btn-primary btn-outline w-1/2 drawer-button lg:hidden font-bold ">Dashboard</label>
                    </div>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gradient-to-r from-blue-900 to-teal-500">

                        <li className='text-white'><a>Sidebar Item 1</a></li>
                        <li className='text-white'><a>Sidebar Item 2</a></li>


                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;