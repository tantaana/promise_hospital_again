import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import DoctorBookingForm from '../Doctors/DoctorBookingForm/DoctorBookingForm';
import bg1 from "../Specialities/SpecialitiesImg/spbg.jpg"
import bg2 from "../Specialities/SpecialitiesImg/bg1.jpg"

import AnotherDoctor from '../Doctors/AnotherDoctor/AnotherDoctor';
import Doctor from '../Doctors/Doctor/Doctor';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import AnotherDoctorBookingForm from '../Doctors/AnotherDoctorBookingForm/AnotherDoctorBookingForm';

const SpecialitiesDetails = () => {

    const details = useLoaderData();
    // const [docInfo, setDocInfo] = useState([]);

    const [doctors, setDoctors] = useState([]);
    const [anotherLoader, setAnotherLoader] = useState(null);


    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);


    useEffect(() => {
        setLoader(true);
        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/docInfo')
            .then(res => res.json())
            .then(data => {
                setLoader(false);
                setDoctors(data)
            })
    }, []);



    const [loading, setLoading] = useState(false);
    const checkLoader = () => {
        setLoading(true);

    }



    const doctor = doctors.filter(info => info.speciality === details.speciality);



    const goBack = () => {
        navigate(-1);
    }



    return (
        <div>
            <div>
                <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/specialities/banners/laparoscopic-surgery-hospital-bangalore.png" className='w-full object-cover h-[500px] xl:h-[600px]' alt="" />
            </div>

            <div className='bg-gradient-to-b from-teal-600 to-blue-900 p-12'>
                <div className='bg-white rounded-xl p-10 mx-0.5 md:mx-4 lg:mx-6 xl:mx-10'>
                    <div className='flex flex-col lg:flex-row items-center gap-8'>
                        <img src={details.img} className="lg:w-[130px] lg:h-[130px]" alt="" />
                        <div className=''>
                            <h2 className='text-4xl font-semibold text-blue-900 mb-8'>{details.speciality}</h2>
                            <h2 className='text-xl font-semibold mb-4'>Best {details.speciality} Hospital in Bangladesh</h2>
                            <h2 className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quidem tenetur. Vitae cum reiciendis libero temporibus illo porro nisi. Eveniet voluptates nostrum sequi! Veritatis, reiciendis modi totam praesentium tempore nam obcaecati facere, cumque mollitia error, quisquam odio aliquid minima officiis nihil molestias minus? Aliquam nobis, quae praesentium similique placeat quidem recusandae sapiente, aperiam velit natus dolor ab suscipit incidunt quo. Quas numquam suscipit, molestias consequuntur, eos cumque saepe harum error officiis tempore deserunt magnam. Suscipit numquam repellendus totam quae, architecto inventore rerum quas ex sapiente corporis nisi, vitae, aspernatur consectetur magnam hic laboriosam sunt esse laudantium? Architecto vitae dolorem tenetur tempore ipsam iste officia delectus voluptates doloremque nisi perspiciatis error, veniam in sit necessitatibus perferendis esse repellat deleniti temporibus ratione, eum ab ducimus. Cumque odit esse expedita eligendi explicabo, molestias vitae aspernatur fugit necessitatibus quis tempore totam laudantium natus reprehenderit, exercitationem dolore eius beatae. Eaque, dolores. Illum veritatis debitis, ipsum corporis eveniet cum illo. </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="doctor-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <DoctorBookingForm></DoctorBookingForm>
                </div>
            </div> */}

            <div className='bg-teal-500 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 p-10 lg:p-10 xl:p-14 2xl:p-14'>
                <div className='lg:w-[600px] xl:w-[800px] 2xl:w-[800px]'>
                    <h2 className='text-4xl font-semibold text-white mb-6'>Why Promise Hospital?</h2>
                    <p className='text-xl font-semibold text-white text-justify'>The numerous purposes of research, services, and the highest standard of patient care are all pursued by Promise Hospital as it works to achieve excellence. We provide therapeutic therapy with the goal of promoting not only preventative care but also lifestyle modification through the integration of patient-centered care, the knowledge of specialists, and cutting-edge medical technology.</p>
                </div>

                <figure><img src="https://cdn.cfr.org/sites/default/files/styles/open_graph_article/public/image/2019/06/5Z8A2172.JPG" className='lg:w-[600px] xl:w-[800px] 2xl:w-[800px]' alt="" /></figure>
            </div>

            <div className='mx-4 my-4'>
                <button onClick={goBack} className="bg-teal-500 hover:bg-teal-400 font-semibold px-4 py-2 rounded flex items-center w-32 gap-2 "><AiOutlineArrowLeft /> <span>Go back</span></button>
            </div>

            <div className='flex justify-center my-10'>
                {
                    loader ?
                        <div class="flex flex-col">
                            <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                        </div>
                        :
                        ''
                }
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:w-11/12 w-10/12 mx-auto mb-10'>

                    {
                        doctor.map(doctor => <AnotherDoctor key={doctor._id} doctor={doctor} setAnotherLoader={setAnotherLoader} checkLoader={checkLoader}></AnotherDoctor>)
                    }

                </div>
            </div>

            <div>
                {
                    anotherLoader &&
                    <AnotherDoctorBookingForm key={anotherLoader._id} anotherLoader={anotherLoader} setAnotherLoader={setAnotherLoader}></AnotherDoctorBookingForm>
                }
            </div>



        </div>
    );
};

export default SpecialitiesDetails;