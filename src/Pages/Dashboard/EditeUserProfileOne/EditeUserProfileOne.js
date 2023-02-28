import React from 'react';

import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const EditeUserProfileOne = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const data = useLoaderData();
    console.log(data)





    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;


        console.log(name)
        console.log(user?.email)

        const data = {
            name,
            phone

        };









        fetch(`http://localhost:5000/users/edite/${user?.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);



            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }









    return (
        <div >



            <div className='shadow-xl mx-10 mr'>
                <div className='mt-10 text-4xl mx-10'>
                    My Profile
                </div>
                <div className='d-flex fl my-10 mr  mx-20'>
                    <div>
                        <div className="avatar mrltwo">
                            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn  shadow-xl text-white my-2' style={{ background: "linear-gradient(90deg,#034ea1 0,#00b7ac 100%)" }}>Upload Photo</button>
                        </div>
                    </div>

                    <div className='my-5 w-full'>
                        <div className='mx-12 mr'>
                            <form onSubmit={handleSubmit} >
                                <div className=''>

                                    <div>
                                        <label >Full Name </label>
                                        <input type="text" name='name' placeholder={data?.name} className=" input input-bordered  w-full text-sm " />

                                    </div>





                                    <div className='my-3'>
                                        <label  > Phone</label>
                                        <input type="text" placeholder={data?.phone} name='phone' className=" input input-bordered  w-full  text-sm" />


                                    </div>


                                    <div className='my-3'>
                                        <label  > Email</label>
                                        <input name="title" type="text" placeholder={data?.email} className=" input input-bordered   w-full  text-sm" disabled />


                                    </div>

                                </div>
                                <div className="" style={{ textAlign: "right" }}>
                                    <button className="btn  text-white" style={{ background: "linear-gradient(90deg,#034ea1 0,#00b7ac 100%)" }}>Save and Edite</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>






























        </div>
    );
};

export default EditeUserProfileOne;