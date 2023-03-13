import React from 'react';
import AllTitle from '../../../Hooks/AllTitle';
import Book from '../../Book/Book';
import About from '../About/About';
import AllGallery from '../Gallery/AllGallery';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import InternationalCenters from '../InternationalCenters/InternationalCenters';
import MedicalValue from '../MedicalValue/MedicalValue';
import Overview from '../Overview/Overview';
import DoctorHome from './Doctor/DoctorHome';

const Home = () => {
    AllTitle('Home')
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Overview></Overview>
            <AllGallery></AllGallery>
            <DoctorHome></DoctorHome>
            <InternationalCenters></InternationalCenters>
            <MedicalValue></MedicalValue>
            <Book></Book>
            <About></About>
        </div>
    );
};

export default Home;