import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import newYear from './new_year.png'


const Nav2 = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-teal-500 xl:flex items-center gap-28 justify-between hidden sticky top-0 z-30'>

            <div>
                <img src={newYear} className="hidden xl:block xl:h-[120px]" alt="" srcset="" />
            </div>

            <div className='flex gap-10 items-center justify-center'>
                <Link to='/' className='text-4xl text-white font-semibold'><FaHome /></Link>
                <Link to='/doctors' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Doctors</Link>
                <Link to='/specialities' className='text-lg text-white font-semibold hover:bg-blue-500 p-4'>Specialities</Link>
                <Link to='/packages' className='text-lg text-white font-semibold hover:bg-blue-500 p-4 text-center'>Health Packages</Link>
                <Link to='/plan' className='text-lg text-white text-center font-semibold hover:bg-blue-500 p-4'>Plan Your Visit</Link>
            </div>

            <div>
                <img src="https://pngfreepic.com/wp-content/uploads/2021/10/offer-48c.png?v=1671298213" className='hidden xl:block xl:h-[120px]' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Nav2;