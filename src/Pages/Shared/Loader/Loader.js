import React from 'react';
import imgCircle from '../../../assets/loading-circle.gif'

const Loader = () => {
    return (
        <div className='flex justify-center'>
            <img src={imgCircle} className='w-[50px] h-[50px]' alt="" />
        </div>
    );
};

export default Loader;