import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const VirtualAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://promise-hospoital-server-jahid900pj.vercel.app/user/virtualAppointmentData?patientEmail=${user.email}`;

    const { data: virtualAppointments = [], isLoading } = useQuery({
        queryKey: ['virtualAppointments', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }

    })

    if (isLoading) {
        <Loader></Loader>
    }

    // console.log(virtualAppointments)
    return (
        <div>




            <h2 className='text-2xl lg:text-3xl font-semibold text-blue-900 mx-4 my-4'>My virtual Appointments</h2>

            <div className='border border-black mx-4 my-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table active w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-blue-900'>Doctor Image</th>
                                <th className='text-blue-900'>Doctor Name</th>
                                <th className='text-blue-900'>Appointment Date</th>
                                <th className='text-blue-900'>Fees</th>
                                <th className='text-blue-900'>Join Meet</th>
                                <th className='text-blue-900'>Edit</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                virtualAppointments.map((data, i) =>
                                    data._id ?
                                        <tr className='hover'>
                                            <td className='text-xl font-bold'>{i + 1}</td>
                                            <td className='p-1'>
                                                <div className="avatar">
                                                    <div className="mask w-14 h-14">
                                                        <img src={data?.doctorImg} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{data?.docName}</div>
                                                </div>
                                            </td>

                                            <td className='text-lg font-semibold'>{data?.appointDate}</td>
                                            <td className='text-xl font-bold'>{data?.fees}/-</td>
                                            <th>
                                                <a className='btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline ' disabled href="w">Join meet</a>
                                            </th>
                                            <th>
                                                <button className="btn btn-secondary text-white btn-md font-bold">Pay </button>
                                            </th>
                                        </tr>
                                        :
                                        <p>No appointment found</p>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VirtualAppointment;