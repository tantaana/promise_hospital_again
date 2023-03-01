import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import newYear from './new_year2.gif'
import banner from './banner1.png'
import anotherPic from './another.webp'
import './Nav2.css'


const Nav2 = () => {


    const activeLinks = ({ isActive }) => {
        return {
            borderBottom: isActive ? '3px solid white' : '0px',
        }
    }

    return (
        <div className='bg-gradient-to-r from-blue-900 to-teal-500 xl:flex items-center gap-28 justify-between hidden sticky top-0 z-30 border-b-4 border-blue-900 px-2'>

            <div>
                {/* <img src='https://pngfreepic.com/wp-content/uploads/2021/10/offer-48c.png?v=1671298213' className="hidden xl:block xl:h-[70px]" alt="" srcset="" /> */}
                <img src='https://static.vecteezy.com/system/resources/previews/008/880/269/original/discount-40-percent-luxury-gold-offer-in-3d-png.png' className="hidden xl:block xl:h-[70px]" alt="" srcset="" />
            </div>

            <div className='flex gap-10 items-center justify-center'>
                <Link to='/' className='text-4xl text-white font-semibold p-2'><FaHome /></Link>
                <NavLink to='/doctors' style={activeLinks} className="text-lg text-white font-semibold hover:bg-white hover:text-blue-800 hover:rounded-lg p-2">Doctors</NavLink>
                <NavLink to='/specialities' style={activeLinks} className='text-lg text-white font-semibold hover:bg-white hover:text-blue-800 hover:rounded-lg p-2'>Specialities</NavLink>
                <NavLink to='/packages' style={activeLinks} className='text-lg text-white font-semibold hover:bg-white hover:text-blue-800 hover:rounded-lg py-1 px-2 text-center'>Health Packages</NavLink>
                <NavLink to='/diagnosis' style={activeLinks} className='text-lg text-white font-semibold hover:bg-white hover:text-blue-800 hover:rounded-lg p-2'>Diagnosis</NavLink>
                <NavLink to='/plan' style={activeLinks} className='text-lg text-white font-semibold hover:bg-white hover:text-blue-800 hover:rounded-lg py-1 px-2 text-center'>Plan Your Visit</NavLink>
            </div>

            <div>
                <img src={newYear} className='hidden xl:block xl:h-[70px]' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Nav2;