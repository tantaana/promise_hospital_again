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

const MedicalValue = () => {
    return (
        <div className='medicalValue-bg'>
            <div className='traveller  '>
                <h1 className='text-center text-3xl font-bold pt-8 text-white mb-8'>Medical Value Traveller</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 md:p-3'>
                    <div>
                        <div>
                            <img className='hidden md:block mx-auto' src={mediacalValue} alt="" />
                        </div>
                        <div>
                            <img className='md:hidden mx-auto' src={medical1} alt="" />
                        </div>
                        <div>
                            <img className='md:hidden mx-auto' src={medical2} alt="" />
                        </div>
                        <div>
                            <img className='md:hidden mx-auto' src={medical3} alt="" />
                        </div>

                    </div>

                    <div>
                        <div>
                            <p className='text-2xl font-normal text-white m-4'>Some of the reasons India is one of the top medical tourism destinations</p>
                        </div>
                        <div className='flex items-center gap-3 m-4'>
                            <img src={Traveller1} alt="" />
                            <p className='text-xl font-normal text-white '>Great hospitality</p>
                        </div>
                        <div className='flex items-center gap-3 m-4'>
                            <img src={Traveller2} alt="" />
                            <p className='text-xl font-normal text-white '>Varied cuisine catering to your needs</p>
                        </div>
                        <div className='flex items-center gap-3 m-4'>
                            <img src={Traveller3} alt="" />
                            <p className='text-xl font-normal text-white '>International language and currency Conversion support</p>
                        </div>
                        <div className='flex items-center gap-3 m-4'>
                            <img src={Traveller4} alt="" />
                            <p className='text-xl font-normal text-white '>Years of healthcare experience</p>
                        </div>
                        <div className='flex items-center gap-3 m-4'>
                            <Link className='text-xl font-normal text-white'>Learn More..</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MedicalValue;