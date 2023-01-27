import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import AllTitle from '../../Hooks/AllTitle';
import DefaultNav from './DefaultNav/DefaultNav';

const VisitPlan = () => {
    AllTitle("Plan");

    return (
        <div>
            <div>
                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/hospitals-in-india-plan-your-visit-desktop.jpg" className='w-full object-cover' alt="" srcset="" />

                <DefaultNav></DefaultNav>

                <div className='my-6 mx-3 md:mx-16 lg:mx-28 xl:mx-40 2xl:mx-48'>
                    <p className='text-lg font-semibold'>This website provides you with complete information about our hospitals, doctors, and range of services. Please take time to view the facilities and successes for your specialization. <br />
                        <br />
                        We understand that in order to plan your medical travel you need to have a good estimate of the cost of treatment and duration of stay in India. Our International Patient health care center will assist you with an approximate estimate with the treatment plan and length of hospitalization required. <br />
                        <br />
                        You will be required to share your medical history and recent reports for the initial assessment. If you have your details in any standard Electronic Health Record System you can share the same. Our doctors review your details and advise you on the treatment plans available in our hospital, their charges and a proposed stay at our hospital for your condition. Our international patient care staffs will be glad to assist you with any information that you might want to know about our facilities, doctors, procedure details or any other clarification. <br />
                        <br />
                        When selecting the international hospital thats right for your needs, you should consider the hospitals accreditation, awards, recognition, and facilities.</p>
                </div>

                <div className='my-16 mx-3 md:mx-16 lg:mx-28 xl:mx-40 2xl:mx-48'>
                    <h3 className='text-4xl font-semibold text-blue-800 text-center mb-6'>How it works?</h3>

                    <div className='block lg:flex justify-center gap-4 mb-6'>
                        <div className='bg-blue-900 p-10 mb-4 lg:m-0'>
                            <div className='flex justify-center'>
                                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/analysis-color.png" alt="" />
                            </div>
                            <h2 className='text-white text-lg font-semibold mb-2 text-center'>STEP 1</h2>
                            <h2 className='text-white text-2xl font-bold mb-6 text-center'>Analysis of your Medical History</h2>
                            <h2 className='text-white text-md font-semibold text-center'>We request you to share your Medical History and recent reports for the initial assesment by our doctor. Post recieving the details they will be able to assist you more properly.</h2>
                        </div>

                        <div className='bg-blue-900 p-10 mb-4 lg:m-0'>
                            <div className='flex justify-center'>
                                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/cosultation-color.png" alt="" />
                            </div>
                            <h2 className='text-white text-lg font-semibold mb-2 text-center'>STEP 2</h2>
                            <h2 className='text-white text-2xl font-bold mb-6 text-center'>Consultation</h2>
                            <h2 className='text-white text-md font-semibold text-center'>Our doctors will review your medical details and contact you via email giving advise on the treatment plans available at our hospital, charges and a proposed stay at our hospital for your condition.</h2>
                        </div>

                        <div className='bg-blue-900 p-10 mb-4 lg:m-0'>
                            <div className='flex justify-center'>
                                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/admission-color.png" alt="" />
                            </div>
                            <h2 className='text-white text-lg font-semibold mb-2 text-center'>STEP 3</h2>
                            <h2 className='text-white text-2xl font-bold mb-6 text-center'>Admission</h2>
                            <h2 className='text-white text-md font-semibold text-center'>Post consultation with the doctor and information about the cost of treatment our staffs will be glad to assist you with any more information that you might want to know and help with further process.</h2>
                        </div>
                    </div>

                    <h3 className='text-lg font-semibold text-center'>For more information, please write to us at <a href='mailto:overseas@promisehospital.com' className='text-blue-800'>overseas@promisehospital.com</a>, or call us at <a href='tel:+8801628672468' className='text-blue-800'>(+880)1628672468</a>. Our coordinator will revert back in less than two working days.</h3>
                </div>
            </div>
        </div>
    );
};

export default VisitPlan;