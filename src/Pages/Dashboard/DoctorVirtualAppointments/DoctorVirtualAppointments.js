import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import EditVirtualAppointments from './EditVirtualAppointments';

const DoctorVirtualAppointments = () => {
    const { user } = useContext(AuthContext);
    const [editData, setEditData] = useState(null)
    // console.log(user)
    console.log(editData)

    const url = `http://localhost:5000/doctor/virtualAppointmentData?doctor_email=${user?.email}`;

    const { data: DoctorVirtualData = [], isLoading } = useQuery({
        queryKey: ['virtualAppointments', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;

        }

    })

    console.log(DoctorVirtualData)



    if (isLoading) {
        <Loader></Loader>
    }

    console.log(DoctorVirtualData)
    return (
        <div>




            <h2 className='text-2xl lg:text-3xl font-semibold text-blue-900 mx-4 my-4'>Doctor virtual Appointments</h2>

            <div className='border border-black mx-4 my-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table active w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-blue-900'>Patient Name</th>
                                <th className='text-blue-900'>Patient Name</th>
                                <th className='text-blue-900'>Appointment Date</th>
                                <th className='text-blue-900'>Fees</th>
                                <th className='text-blue-900'>Join Meet</th>
                                <th className='text-blue-900'>Edit</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                DoctorVirtualData.map((data, i) =>
                                    data._id ?
                                        <tr className='hover'>
                                            <td className='text-xl font-bold'>{i + 1}</td>
                                            <td className='p-1'>
                                                <div>
                                                    <div className="font-bold text-lg">{data?.patientName}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{data?.patientEmail}</div>
                                                </div>
                                            </td>

                                            <td className='text-lg font-semibold'>{data?.appointDate}</td>
                                            <td className='text-xl font-bold'>{data?.fees}/-</td>
                                            <th>
                                                <a className='btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline ' href={data?.Meet_Link?.[0]
                                                }>Join meet</a>
                                                {/* <Link to={``}>meet</Link> */}
                                            </th>
                                            <th>
                                                <label onClick={() => setEditData(data)} htmlFor="edit-virtual-appointment" className="btn glass bg-red-500 hover:bg-red-600 text-black btn-outline btn-sm">Edit</label>
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
            <div>
                {
                    editData && <EditVirtualAppointments key={editData?._id} editData={editData} user={user} setEditData={setEditData}></EditVirtualAppointments>
                }
            </div>
        </div>
    );
};

export default DoctorVirtualAppointments;