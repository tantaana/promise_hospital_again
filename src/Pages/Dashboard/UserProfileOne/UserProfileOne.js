import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './UserProfileOne.css'



const UserProfileOne = () => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    console.log(data)


    useEffect(() => {
        fetch(`http://localhost:5000/users/edite/${user?.email}`)
            .then((response) => response.json())
            .then((data) => setData(data));

    }, [user?.email])



    return (
        <div className='mx-5 mr '>
            <div className='shadow-xl mx-10 mr'>
                <div className='mt-10 text-4xl mx-10'>
                    My Profile
                </div>
                <div className=' fl my-10 mr  mx-20'>
                    <div className='text-center'>
                        <div className="avatar text-center ">
                            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                                {data?.photoURL ? <img src={data?.photoURL} /> : <> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UPFnLxR_ufPingTgX99_0o1WtIy2mlNRMQ&usqp=CAU" alt='' />  </>
                                }


                            </div>
                        </div>
                        <div className='text-center '>
                            <button style={{ background: "linear-gradient(90deg,#034ea1 0,#00b7ac 100%)" }} className='btn btn-primary shadow-xl text-white my-2'><Link to={`/dashboard/editeuserprofile/${user?.email}`}>Edite</Link></button>
                        </div>
                    </div>

                    <div className='my-5 '>
                        <div className='mx-12 mr'>
                            <div >
                                <p className='text-sm'>
                                    <b>Student ID :</b>

                                </p>
                                {
                                    data?._id ? <p>{data?._id}</p> : <p>N/A</p>
                                }

                            </div>
                            <div className='my-5'>
                                <p className='text-sm'>
                                    <b>
                                        Full name:
                                    </b>
                                </p>
                                {
                                    data?._id ? <p>{data?.name}</p> : <p>N/A</p>
                                }
                                <p>

                                </p>
                            </div>

                            <div className='my-5'>
                                <p className='text-sm'>
                                    <b>
                                        Email:
                                    </b>
                                </p>
                                <p>
                                    {user?.email}
                                </p>
                            </div>

                            <div>
                                <p className='text-sm'>
                                    <b>
                                        Phone:
                                    </b>
                                </p>
                                {
                                    data?.phone ? <p>{data?.phone}</p> : <p>
                                        N/A

                                    </p>
                                }

                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default UserProfileOne;