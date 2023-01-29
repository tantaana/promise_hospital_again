import React from 'react';
import DefaultNav from '../DefaultNav/DefaultNav';

const Arrival = () => {
    const availableService = [
        {
            img: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/24x7-Room-Services.png',
            name: '24X7 Room Services'
        },
        {
            img: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/Cafeteria.png',
            name: 'Caferteria'
        },
        {
            img: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/Interepretor.png',
            name: 'Interepretor'
        },
        {
            img: 'https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/Safety-&-Security.png',
            name: 'Safety and Security'
        }
    ]
    return (
        <div>
            <div>
                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/services/best-multispeciality-hospital-in-india.jpg" className='w-full object-cover' alt="" srcset="" />

                <DefaultNav></DefaultNav>

                <div className='mx-10 sm:mx-16 md:mx-28 my-10'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/arrival.png" alt="" srcset="" />
                        <h2 className='text-blue-900 font-semibold text-3xl'>Arrival and Standard Process Flow</h2>
                    </div>
                    <p className='text-lg font-semibold'>Upon your confirmation on the date of arrival, Manipal International Patient Care would arrange for the airport pickup facility (Either an ambulance / ICU Ambulance or a private vehicle) based on the patient’s medical condition. You would be greeted at the Airport by a representative of the Manipal International Patient care team and escorted to your hotel/hospital based on the itinerary. <br />
                        <br />

                        Currency exchange facility available near the reception, Special translation services, 24-hour room service, In-house pantry, Local tour services is some of the benefits you are entitled to get from our services.</p>
                </div>

                <div className='mx-10 sm:mx-16 md:mx-28 my-10'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/arrival-documents.png" alt="" srcset="" />
                        <h2 className='text-blue-900 font-semibold text-3xl'>Documents to be presented on your arrival</h2>
                    </div>
                    <p className='text-lg font-semibold'>We expect you to have the following when you arrive at our international patient care center:</p>
                    <div className='mx-12'>
                        <ol className='text-lg' style={{ listStyleType: 'circle' }}>
                            <li>Your appointment letter</li>
                            <li>Hospital card of your previous visits, if any</li>
                            <li>Your recent medical reports (including scans, X-rays, blood tests etc.)</li>
                            <li>Details of prescribed drugs which you are presently on</li>
                            <li>Identity Proof</li>
                            <li>Insurance card</li>
                            <li>Passport size photograph ( 10 ) for both the patients and the attendant</li>
                            <li>The local mandate like Yellow fever vaccination if your country’s immigration demands as a mandate .</li>
                        </ol>
                    </div>
                </div>

                <div className='bg-teal-500 p-10'>
                    <h2 className='text-4xl text-white font-semibold mb-8 text-center'>Services available at hospital</h2>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        {
                            availableService.map(services =>
                                <div className='flex flex-col items-center gap-4'>
                                    <img src={services.img} className='w-[250px] md:w-[300px] xl:w-[400px] scale-100 hover:scale-110 ease-in duration-200' alt="" srcset="" />
                                    <h2 className='text-white text-2xl font-semibold'>{services.name}</h2>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className='mx-10 sm:mx-16 md:mx-28 my-10'>
                    <div className='flex items-center gap-2 mb-2'>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/consultation.png" alt="" srcset="" />
                        <h2 className='text-blue-900 font-semibold text-3xl'>Consultation and Treatment</h2>
                    </div>
                    <div className='mx-12'>
                        <ol className='text-lg' style={{ listStyleType: 'circle' }}>
                            <li>After your arrival, you will be given some time to rest and overcome the jetlag. Our nurses and support staff will assist you in all possible ways until you settle down in your ward.</li>
                            <li>Then you need to take some important documents like appointment letter, personal identification proof, your previous medical test reports, insurance card etc. after which you will be taken to your appointed doctor for your first consultation.</li>
                            <li>After a detailed check-up and assessment of your medical condition, you will be accompanied by your appointed co-coordinator to the ward.</li>
                            <li>After several appointments and tests, the doctor will suggest you what type of surgery or treatment is appropriate for you. This will be the most important phase of your visit.</li>
                            <li>We also have our nurses and support staffs are there to assist you in all possible ways you want. During your stay at our hospital, you can leverage access to phones, internet-connected computers, our local drug store etc. We also have a well-maintained canteen where you can have healthy food.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Arrival;