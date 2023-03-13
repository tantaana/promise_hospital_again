import React from 'react';
import './Footer.css'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaHeartbeat } from 'react-icons/fa';
import { GrYoutube } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
import foot1 from './FooterImg/foot1.png'
import foot2 from './FooterImg/foot2.jpeg'

const Footer = () => {
    const activeLinks = ({ isActive }) => {
        return {
            color: isActive ? '#93c5fd' : '',
        }
    }

    return (
        <div className='text-white py-4 footerBg'>
            <footer className="footer p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <NavLink style={activeLinks} to='/doctors' className='hover:text-blue-300'>All Doctors</NavLink>
                    <NavLink style={activeLinks} to='/specialities' className='hover:text-blue-300'>Specialities</NavLink>
                    <NavLink style={activeLinks} to='/packages' className='hover:text-blue-300'>Health Packages</NavLink>
                    <NavLink style={activeLinks} to='/diagnosis' className='hover:text-blue-300'>Diagnosis</NavLink>
                    <NavLink style={activeLinks} to='/plan' className='hover:text-blue-300'>Plan Your Visit</NavLink>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <NavLink style={activeLinks} to='/about' className='hover:text-blue-300'>About Us</NavLink>
                    <NavLink style={activeLinks} to='/contact' className='hover:text-blue-300'>Contact Us</NavLink>
                    <NavLink style={activeLinks} to='/stories' className='hover:text-blue-300'>Success Stories</NavLink>
                    <NavLink style={activeLinks} to='/blogs' className='hover:text-blue-300'>Blogs</NavLink>
                    <NavLink style={activeLinks} to='/news' className='hover:text-blue-300'>News & Media</NavLink>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="hover:text-blue-300 cursor-pointer">Terms of Use</a>
                    <a className="hover:text-blue-300 cursor-pointer">Privacy Policy</a>
                    <a className="hover:text-blue-300 cursor-pointer">Cookie Policy</a>
                </div>
                <div>
                    <span className="footer-title">ACCREDITATIONS</span>
                    <div className='flex items-center gap-4 mt-2'>
                        <img src={foot1} className="" alt="" srcset="" />
                        <img src={foot2} className="" alt="" srcset="" />
                    </div>
                </div>
            </footer>

            <div className='flex justify-center'><div className='border border-white w-5/6 rounded-full'></div></div>


            <footer className="footer px-10 py-4 flex justify-between">

                <div className='flex flex-col'>
                    <div className='text-2xl md:text-3xl font-semibold'>
                        <span className='text-blue-400'>promise</span><span className='text-teal-400'>hospital</span>
                    </div>
                    <div className='w-full flex justify-end'>
                        <h2 className='text-blue-300 text-sm flex items-center justify-center gap-1 md:gap-2'><span>Beside you forever</span> <FaHeartbeat className='text-rose-600 font-bold text-base md:text-xl' /></h2>
                    </div>
                </div>

                <div className='text-2xl md:text-3xl text-white'>

                    <span className='footer-title text-sm'>Social</span>
                    <div className='flex items-center gap-2'>
                        <FaFacebookSquare className='cursor-pointer hover:text-teal-300' />
                        <AiFillInstagram className='cursor-pointer hover:text-teal-300' />
                        <GrYoutube className='cursor-pointer hover:text-teal-300' />
                    </div>

                </div>

            </footer>

            <p className='text-sm md:text-base text-center font-semibold my-4'>Copyright © 2023 - All right reserved by <span className='text-blue-400'>Promise</span> <span className='text-teal-400'>Hospital</span> Ltd.</p>
        </div>
    );
};

export default Footer;