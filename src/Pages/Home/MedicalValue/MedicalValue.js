import React from 'react';
import { Link } from 'react-router-dom';
import './MedicalValue.css'
import mediacalValue from './MedicalValueImages/mediacal-value.webp'
import Traveller1 from './MedicalValueImages/hospitality.svg'
import Traveller2 from './MedicalValueImages/varied.svg'
import Traveller3 from './MedicalValueImages/language.svg'
import Traveller4 from './MedicalValueImages/healthcare.svg'
import medical1 from './MedicalValueImages/medical-one-new.webp'
import medical2 from './MedicalValueImages/medical-two-new.webp'
import medical3 from './MedicalValueImages/medical-3.webp'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const MedicalValue = () => {
    return (
        <PhotoProvider>
            <div className='medicalValue-bg py-16'>
                <div className='traveller  '>
                    <h1 className='text-center text-3xl md:text-4xl font-bold text-white mb-16 xl:mb-20'>Medical Value Traveller</h1>

                    <div className='flex justify-center'>
                        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-28 mx-6'>
                            <div className='mx-4'>
                                <div>
                                    <img className='hidden md:block mx-auto' src={mediacalValue} alt="" />
                                </div>

                                <div className='block md:hidden flex flex-col gap-5'>
                                    <div>
                                        <PhotoView src={medical1}>
                                            <img className='h-[300px] w-[400px] object-cover cursor-zoom-in hover:scale-110 ease-in-out duration-300' src={medical1} alt="" />
                                        </PhotoView>
                                    </div>
                                    <div>
                                        <PhotoView src={medical2}>
                                            <img className='h-[300px] w-[400px] object-cover cursor-zoom-in hover:scale-110 ease-in-out duration-300' src={medical2} alt="" />
                                        </PhotoView>
                                    </div>
                                    <div>
                                        <PhotoView src={medical3}>
                                            <img className='h-[300px] w-[400px] object-cover cursor-zoom-in hover:scale-110 ease-in-out duration-300' src={medical3} alt="" />
                                        </PhotoView>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-3 mx-4'>
                                <div className='mb-8'>
                                    <p className='text-2xl md:text-3xl font-semibold text-white'>Some of the reasons why Bangladesh is one of<br /> the top medical tourism destinations :</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img src={Traveller1} alt="" />
                                    <p className='text-lg md:text-xl font-semibold text-white '>Great hospitality</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img src={Traveller2} alt="" />
                                    <p className='text-lg md:text-xl font-semibold text-white '>Varied cuisine catering to your needs</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img src={Traveller3} alt="" />
                                    <p className='text-lg md:text-xl font-semibold text-white '>International language and currency conversion support</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img src={Traveller4} alt="" />
                                    <p className='text-lg md:text-xl font-semibold text-white '>25+ years of healthcare experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PhotoProvider>
    );
};

export default MedicalValue;