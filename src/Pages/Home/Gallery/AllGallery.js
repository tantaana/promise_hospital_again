import React from 'react';
import './Gallery.css';
import img1 from '../Gallery/gelleryImg/img1.jpg'
import img2 from '../Gallery/gelleryImg/img2.jpg'
import img3 from '../Gallery/gelleryImg/img3.jpg'
import img4 from '../Gallery/gelleryImg/img4.jpg'
import img5 from '../Gallery/gelleryImg/img5.jpg'
import img6 from '../Gallery/gelleryImg/img6.jpg'
import img7 from '../Gallery/gelleryImg/img7.jpg'
import bg from '../Gallery/gelleryImg/bg.jpeg'
import Gellery from './Gallery'

const AllGallery = () => {
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
        {
            _id: 6,
            img: img7,
        },]
    return (
        <div className='justify-center text-center'>
            <div className=" bg-no-repeat hero   "
                style={
                    {
                        background: `url(${bg})`,
                        padding: 20,
                        height: '100%',

                    }
                }>
                <div className='justify-center text-center '>
                    <h2 className='home-gallery'>Gallery</h2>
                    <p className='text-center gallery-home active w-44 mb-5 mx-auto font-bold text-lg'>Hospital Images </p>
                    <div className='lg:flex sm:grid mr-6'>
                        <div>
                            <img className=' hover:scale-110 transition duration-300 ease-in-out  sm:h-48 sm:w-64 mb-4' style={{ height: 470, borderRadius: 10 }} src={img1} alt=''></img>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 '>
                            {
                                images.map(imag => <Gellery
                                    key={imag._id}
                                    imag={imag}
                                ></Gellery>)
                            }</div>
                    </div>
                    <button className="btn btn-active bg-blue-800 text-white  justify-end text-center  mt-3 mb-8" >View All</button>
                </div>

            </div>
        </div>
    );
};

export default AllGallery;