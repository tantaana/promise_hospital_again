import React from 'react';
import AllBed from './Bad/AllBed';
import Bed from './Bad/Bed';
import WaitAllroom from './Waittingroom/WaitAllroom';


const ViewAllGallery = () => {

    return (
        <div className='mb-7'>
              <p className='justify-center text-2xl text-center p-5 font-bold '> View All Gallery </p>
            <WaitAllroom></WaitAllroom>
            <AllBed></AllBed>

        </div>
    );
};

export default ViewAllGallery;