import React from 'react';
import img1 from '../../../Home/Gallery/gelleryImg/img7.jpg'
import img2 from '../../../Home/Gallery/gelleryImg/img9.jpg'
import img3 from '../../../Home/Gallery/gelleryImg/img11.jpeg'
import Waitroom from './Waitroom';

const WaitAllroom = () => {
    const images = [
        {
            _id: 1,
            img: img1,
        },
        {
            _id: 2,
            img: img2,
        },
        {
            _id: 3,
            img: img3,
        },
       
        
    ]
    return (
        <div className='ml-3'>
            <p className='text-xl mb-5 '>Waiting Room & Emergrncy</p>
        <div className='grid lg:grid-cols-4 grid-cols-1'>
            {
                                images.map(imag => <Waitroom
                                    key={imag._id}
                                    imag={imag}
                                ></Waitroom>)
                            }
        </div></div>
    );
};

export default WaitAllroom;