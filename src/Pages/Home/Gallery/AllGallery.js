import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

import img1 from '../../../image/home.jpg'
import img2 from '../Gallery/gelleryImg/img2.jpg'
import img3 from '../Gallery/gelleryImg/img3.jpg'
import img4 from '../Gallery/gelleryImg/img4.jpg'
import img5 from '../Gallery/gelleryImg/img5.jpg'
import img6 from '../Gallery/gelleryImg/img6.jpg'
import img7 from '../Gallery/gelleryImg/img7.jpg'
import bgImg from '../Gallery/gelleryImg/bg.jpg'
import './AllGallery.css'

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

        <PhotoProvider>
            <div className='my-28 lg:my-40 py-10 bgDiv'>
                <h2 className='text-blue-900 text-3xl font-bold text-center mb-10'>Gallery</h2>


                <div className='flex flex-col lg:flex-row justify-center items-center gap-4 2xl:gap-6'>

                    <div className='relative'>
                        <PhotoView src={img1}>
                            <div>
                                <div className='bg-black w-full h-full relative'></div>
                                <img src={img1} className="object-cover rounded-md hover:scale-105 hover:brightness-75 transition duration-300 ease-in-out h-[400px] sm:h-[400px] md:h-[500px] lg:h-[350px] xl:h-[450px] 2xl:h-[650px] w-[320px] sm:w-[400px] md:w-[600px] lg:w-[250px] xl:w-[350px] 2xl:w-[450px] cursor-zoom-in" alt="" srcset="" />
                            </div>

                        </PhotoView>


                    </div>

                    <div className='grid gap-4 2xl:gap-6 grid-cols-1 lg:grid-cols-3'>
                        {
                            images.map(image =>
                                <div>
                                    <PhotoView src={image.img}>
                                        <img src={image.img} className="object-cover rounded-md hover:scale-105 hover:brightness-75 transition duration-300 ease-in-out h-[400px] sm:h-[400px] md:h-[500px] lg:h-[160px] xl:h-[210px] 2xl:h-[310px] w-[320px] sm:w-[400px] md:w-[600px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] cursor-zoom-in" alt="" srcset="" />
                                    </PhotoView>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className='flex justify-center mt-10'>
                    <Link to='/gallery'><button className='btn bg-blue-900 hover:bg-teal-500 border-none text-white'>View All</button></Link>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default AllGallery;