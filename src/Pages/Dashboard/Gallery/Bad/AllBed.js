import React from 'react';
import img1 from '../../../Home/Gallery/gelleryImg/img1.jpg'
import img2 from '../../../Home/Gallery/gelleryImg/img2.jpg'
import img3 from '../../../Home/Gallery/gelleryImg/img3.jpg'
import img4 from '../../../Home/Gallery/gelleryImg/img4.jpg'
import img5 from '../../../Home/Gallery/gelleryImg/img5.jpg'
import img6 from '../../../Home/Gallery/gelleryImg/img6.jpg'
import img7 from '../../../Home/Gallery/gelleryImg/img9.jpg'
import Bed from './Bed';

const AllBed = () => {
    const images = [
        {
            _id: 1,
            img: img2,
        },
        {
            _id: 2,
            img: img3,
        },
        {
            _id: 3,
            img: img4,
        },
        {
            _id: 4,
            img: img5,
        },
        {
            _id: 5,
            img: img6,
        },
        

    ]
    
    return (
        <div className='ml-3'>
          
            <p className='text-xl mb-5 mt-4'>Cabin Room </p>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-2 '>
                {
                    images.map(imag => <Bed
                        key={imag._id}
                        imag={imag}
                    ></Bed>)
                }

            </div> 
        </div>
    );
};

export default AllBed;