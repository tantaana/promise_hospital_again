import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav1 from '../Pages/Shared/Navber/Nav1/Nav1';
import Nav2 from '../Pages/Shared/Navber/Nav2/Nav2';

const Main = () => {
    return (
        <div>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;