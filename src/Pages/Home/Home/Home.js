import React from 'react';
import AllTitle from '../../../Hooks/AllTitle';
import Book from '../../Book/Book';
import CentreOfExcellence from '../CentreOfExcellence/CentreOfExcellence';
import AllGallery from '../Gallery/AllGallery';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import InternationalCenters from '../InternationalCenters/InternationalCenters';
import MedicalValue from '../MedicalValue/MedicalValue';
import OurLocation from '../OurLocation/OurLocation';
import Overview from '../Overview/Overview';

const Home = () => {
    AllTitle('Home')
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Overview></Overview>
            <CentreOfExcellence></CentreOfExcellence>
            <OurLocation></OurLocation>
            <AllGallery></AllGallery>
            <InternationalCenters></InternationalCenters>
            <MedicalValue></MedicalValue>
            <Book></Book>
        </div>
    );
};

export default Home;