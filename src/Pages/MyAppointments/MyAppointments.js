import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import '../Dashboard/Dashboard.css'

const MyAppointments = () => {
    const { user } = useContext(AuthContext);

    const [loader, setLoader] = useState(false)

    const startLoader = () => {
        setLoader(true);
    }

    const url = `https://promise-hospoital-server-jahid900pj.vercel.app/appointmentData?patientEmail=${user?.email}`;

    const { data: patientEmail = [], isLoading } = useQuery({
        queryKey: ['patientEmail', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(patientEmail)
            return data;

        }

    })

    if (isLoading) {
        return <Loader></Loader>
    }


    const ta = (id) => {




        const data = { id };

        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/ssl', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.replace(data.uri)
            })
            .catch((error) => {
                console.error('Error:', error);
            });








        console.log(id)
    }

    return (
        <div className='dashboardBg py-20'>
            <div className='flex flex-col gap-2 xl:flex-row items-center xl:gap-6 my-10 mx-4 bg-gray-300 p-2'>
                <h2 className='text-2xl font-semibold text-blue-900'>Logged In User: <span className='text-black font-normal'>{user?.displayName}</span></h2>
                <h2 className='text-2xl font-semibold text-teal-600'>User Email: <span className='text-black font-normal'>{user?.email}</span></h2>
                <div className='flex justify-center items-center'>

                    {
                        loader ?
                            <div class="flex flex-col mb-0">
                                <div class="w-8 h-8 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                            </div> : ''
                    }

                </div>
            </div>



            <h2 className='text-2xl lg:text-3xl font-semibold text-blue-900 mx-4 my-4'>My Appointments</h2>

            <div className='border border-black mx-4 my-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table active w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-blue-900'>Doctor Image</th>
                                <th className='text-blue-900'>Doctor Name</th>
                                <th className='text-blue-900'>Location</th>
                                <th className='text-blue-900'>Appointment Date</th>
                                <th className='text-blue-900'>Fees</th>
                                <th className='text-blue-900'>See Details</th>
                                <th className='text-blue-900'>Payment</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                patientEmail?.map((patient, i) =>
                                    <tr className='hover'>
                                        <td className='text-xl font-bold'>{i + 1}</td>
                                        <td className='p-1'>
                                            <div className="avatar">
                                                <div className="mask w-14 h-14">
                                                    <img src={patient?.doctorImg} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold text-lg">{patient?.docName}</div>
                                            </div>
                                        </td>
                                        <td className='text-lg font-semibold'>
                                            {patient?.docLocation}
                                        </td>
                                        <td className='text-lg font-semibold'>{patient?.appointDate}</td>
                                        <td className='text-xl font-bold'>{patient?.fees}/-</td>
                                        <th>
                                            <Link to={`/dashboard/details/${patient?._id}`}><button onClick={startLoader} className="btn btn-primary btn-md">Details</button></Link>
                                        </th>
                                        <th>
                                            {
                                                patient.fees && !patient.paid && <Link to={`/dashboard/payment/${patient._id}`}><button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold mr-2">Pay Card </button></Link>
                                            }
                                            {
                                                patient.fees && patient.paid && <span className='text-green-500'>Paid</span>
                                            }

                                            <button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold">Pay SSL</button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-center mx-4 my-10'>
                <div>
                    {
                        patientEmail?.length ? '' : <p className='text-3xl lg:text-4xl font-semibold text-red-700'>No Appointment Found</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;