import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import whiteBg from '../../assets/white_bg.jpg'
import './Dashboard.css'

const Dashboard = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className='my-4 mx-4 py-20 dashboardBg'>
            <h2 className='text-3xl font-semibold text-blue-900 text-center mb-4'>Hello, <span className='font-normal'>{user?.displayName}</span></h2>
            <h2 className='text-4xl font-semibold text-center mb-2'>Welcome to <span className='text-blue-900'>promise</span><span className='text-teal-500'>hospital</span> dashboard</h2>
            <h2 className='text-center text-7xl font-bold mb-16'>🏥</h2>

            <div className='bg-blue-400 p-10 mx-4'>
                <h2 className='text-2xl font-semibold mb-6'>Update User Info</h2>
                <div className='mb-4'>
                    <h2 className='text-lg font-semibold'>Full Name:</h2>
                    <input type="text" placeholder="Type your new name" className="input input-bordered input-secondary w-full max-w-xs" required />
                </div>
                <div className='mb-4'>
                    <h2 className='text-lg font-semibold'>Email:</h2>
                    <input type="text" placeholder="Type your new email" className="input input-bordered input-secondary w-full max-w-xs" required />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;