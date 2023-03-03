import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Advertise from '../Pages/Shared/Advertise/Advertise';
import Footer from '../Pages/Shared/Footer/Footer';
import Nav1 from '../Pages/Shared/Navber/Nav1/Nav1';
import Nav2 from '../Pages/Shared/Navber/Nav2/Nav2';

const Main = () => {
    let location = useLocation();
    return (
        <div>
            <Advertise></Advertise>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Outlet></Outlet>
            {location.pathname !== '/specialities' && <Footer></Footer>}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;