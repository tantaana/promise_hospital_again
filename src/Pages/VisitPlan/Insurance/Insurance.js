import React from 'react';
import DefaultNav from '../DefaultNav/DefaultNav';

const Insurance = () => {

    const insuranceData = [
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance111.png',
            name: 'Aasandha Maldives',
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance22.png',
            name: 'MOH Mauritius'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance3.png',
            name: 'MOH Oman'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance4.png',
            name: 'Qatar Charity'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance5.png',
            name: 'National Hospital Insurance'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance6.png',
            name: 'Allied Insurance Maldives'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance7.png',
            name: 'Asia Rescue and Medical Services'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance8.png',
            name: 'Radiant Insurance Company'
        },
        {
            pic: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/InsurancePartners/insurance9.png',
            name: 'CIGNA'
        }
    ];


    return (
        <div>
            <div>
                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/Insurance.png" className='w-full object-cover' alt="" srcset="" />

                <DefaultNav></DefaultNav>

                <div>
                    <p className='text-lg font-semibold text-center mx-6 my-8'>Manipal has official tie-ups with several major international medical insurance companies and thus provides a hassle-free, straight forward medical journey for our patients.</p>

                    <div className='flex flex-wrap gap-10 justify-center mx-4'>
                        {
                            insuranceData.map(insurance =>
                                <div className=''>
                                    <div className="rounded-lg shadow-xl w-[350px] h-[250px] md:w-[500px] md:h-[350px] bg-gradient-to-r from-blue-900 to-teal-500 flex justify-center items-center bg-red-400 p-0.5 pb-3 scale-100 hover:scale-110 ease-in duration-200">

                                        <div className='rounded-lg bg-white flex flex-col justify-center items-center gap-2 sm:gap-6 h-full w-full'>
                                            <figure className=''><img src={insurance.pic} className='' alt="Shoes" /></figure>

                                            <h2 className="text-xl font-semibold">{insurance.name}</h2>
                                        </div>


                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insurance;