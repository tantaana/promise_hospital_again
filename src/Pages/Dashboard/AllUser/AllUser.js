import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import { toast } from 'react-hot-toast';
import MakeDoctorModal from './MakeDoctorModal';
import RemoveDoctorModal from './RemoveDoctorModal';


const AllUser = () => {

    const { user } = useContext(AuthContext);

    const [loader, setLoader] = useState(false);
    const [getData, setGetData] = useState(null);
    const [removeData, setRemoveData] = useState(null);

    const startLoader = () => {
        setLoader(true);
    }

    const url = `https://promise-hospoital-server-jahid900pj.vercel.app/userData`;

    const { data: userData = [], isLoading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(userData)
            return data;

        }

    })

    if (isLoading) {
        return <Loader></Loader>
    }




    const handleMakeDoctor = (id) => {
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/userData/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Doctor has been made successfully');
                    setGetData(null)
                    refetch();
                }
            })
    }

    const handleDeleteUser = (id) => {
        fetch(`https://promise-hospoital-server-jahid900pj.vercel.app/userData/deletedData/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successfully');
                    setRemoveData(null);
                    refetch();

                }

            })

    }


    return (
        <div>
            <div className='flex flex-col gap-2 xl:flex-row items-center xl:gap-6 my-10 mx-4 p-2 bg-gray-300'>
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

            <h2 className='text-2xl lg:text-3xl font-semibold text-blue-900 mx-4 my-4'>All User Info</h2>

            <div className='border border-black mx-4 my-4'>
                <div className="overflow-x-auto w-full">
                    <table className="table active w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th className='text-blue-900'>User Image</th>
                                <th className='text-blue-900'>Full Name</th>
                                <th className='text-blue-900'>Email</th>
                                <th className='text-blue-900'>User Type</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                userData.map((user, i) =>
                                    user._id ?
                                        <tr className='hover'>
                                            <td className='text-xl font-bold'>{i + 1}</td>
                                            <td className='p-1'>
                                                <div className="avatar">
                                                    <div className="mask w-14 h-14">
                                                        <img src={user?.doctorImg} alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <div className="font-bold text-lg">{user?.name}</div>
                                                </div>
                                            </td>
                                            <td className='text-lg font-semibold text-blue-600'>
                                                {user?.email}
                                            </td>
                                            <td className='text-lg font-semibold'>{user?.userType}</td>
                                            <td>{user?.userType === "Patient" ?
                                                <label onClick={() => setGetData(user)} htmlFor="make-doctor-modal" className="btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline btn-sm">Make Doctor</label>
                                                :
                                                <h2 className="text-md font-semibold">Already a doctor</h2>}</td>
                                            <td><label onClick={() => setRemoveData(user)} htmlFor="remove-doctor-modal" className="btn glass bg-red-500 hover:bg-red-600 text-black btn-outline btn-sm">Remove User</label></td>

                                            {/* <th>
                                                {
                                                    patient.fees && !patient.paid && <Link to={`/dashboard/payment/${patient._id}`}><button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold mr-2">Pay Card </button></Link>
                                                }
                                                {
                                                    patient.fees && patient.paid && <span className='text-green-500'>Paid</span>
                                                }

                                                <button onClick={startLoader} className="btn btn-secondary text-white btn-md font-bold">Pay SSL</button>
                                            </th> */}
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
                    getData && <MakeDoctorModal key={userData?._id} getData={getData} setGetData={setGetData} handleMakeDoctor={handleMakeDoctor}></MakeDoctorModal>
                }
            </div>

            <div>
                {
                    removeData && <RemoveDoctorModal key={userData?._id} removeData={removeData} setRemoveData={setRemoveData} handleDeleteUser={handleDeleteUser}></RemoveDoctorModal>
                }
            </div>
        </div>
    );
};

export default AllUser;