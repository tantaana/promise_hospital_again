import React from 'react';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import InternationalCenters from '../InternationalCenters/InternationalCenters';
import MedicalValue from '../MedicalValue/MedicalValue';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <InternationalCenters></InternationalCenters>
            <MedicalValue></MedicalValue>
        </div>
    );
};

export default Home;