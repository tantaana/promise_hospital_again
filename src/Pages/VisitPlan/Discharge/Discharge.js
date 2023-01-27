import React from 'react';
import DefaultNav from '../DefaultNav/DefaultNav';

const Discharge = () => {
    return (
        <div>
            <div>
                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/best-multispeciality-hospitals-in-india.jpg" className='w-full object-cover' alt="" srcset="" />

                <DefaultNav></DefaultNav>

                <div className='mx-10 sm:mx-16 md:mx-28 my-10'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/departure.png" alt="" srcset="" />
                        <h2 className='text-blue-900 font-semibold text-3xl'>Discharge and Departure</h2>
                    </div>
                    <div className='mx-12'>
                        <ol className='text-lg' style={{ listStyleType: 'circle' }}>
                            <li>Depending on your health condition, when your doctor feels that you are ready to fly back to your home country, you will be discharged.</li>
                            <li>After that you can keep in touch with our doctors through phone in case you need any medical advice.</li>
                            <li>The international patient care center will also arrange for a handover to your local GP to update him regarding you treatment and required aftercare.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discharge;