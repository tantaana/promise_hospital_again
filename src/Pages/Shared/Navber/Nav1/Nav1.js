import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { FaUserMd, FaClipboardList, FaHome, FaHospitalUser } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { RiContactsBookLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";

const Nav1 = () => {
    return (
        <div>
            <div className='flex justify-between m-2'>
                <Link className="btn bg-transparent border-none hover:bg-transparent normal-case text-3xl" to='/'>
                    <div>
                        <div>
                            <span className='text-blue-700'>promise</span><span className='text-teal-500'>hospital</span>
                        </div>
                        <div className='flex justify-end'>
                            <h2 className='text-blue-500 text-sm'>Beside you forever ❤️</h2>
                        </div>
                    </div></Link>

                <div className='hidden items-center xl:flex gap-4'>
                    <div className='flex gap-4'>
                        <input type="text" placeholder="🔍 Search Here" className="input input-bordered input-success rounded-full border border-2" />
                        <a href='tel:+8801628672468' className='font-semibold text-lg p-3'>📞(+880)-1628672468</a>
                        <a href='mailto:info@promise-hospital.com' className='font-semibold text-lg p-3'>📧  info@promise-hospital.com</a>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn hover:bg-teal-500 m-1 text-3xl bg-transparent border border-teal-700 rounded-2xl text-black"><BiMenu /></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52 text-lg font-semibold bg-gradient-to-r from-blue-300 to-teal-300">
                            <li><Link to='/about' className='hover:bg-gray-300'><FaUserMd />About Us</Link></li>
                            <li><Link to='/blogs' className='hover:bg-gray-300'><MdContactPage />Blogs</Link></li>
                            <li><Link to='/news' className='hover:bg-gray-300'><BsNewspaper />News & Media</Link></li>
                            <li><Link to='/packages' className='hover:bg-gray-300'><FaClipboardList />Packages</Link></li>
                            <li><Link to='/contact' className='hover:bg-gray-300'><RiContactsBookLine />Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown dropdown-end block xl:hidden">
                    <label tabIndex={0} className="btn hover:bg-teal-500 m-1 text-3xl bg-transparent border-none text-black"><BiMenu /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gradient-to-r from-blue-300 to-teal-300 rounded-box w-52 break-all">
                        <li><Link to='/' className='flex justify-center text-3xl'><FaHome /></Link></li>
                        <li><Link to='/doctors' className='hover:bg-gray-300'><FaHospitalUser />Doctors</Link></li>
                        <li><Link to='/specialities' className='hover:bg-gray-300'><GiFallingStar />Specialities</Link></li>
                        <li><Link to='/gallery' className='hover:bg-gray-300'><TfiGallery />Gallery</Link></li>
                        <li><Link to='/plan' className='hover:bg-gray-300'><ImAirplane />Plan Your Visit</Link></li>
                        <li><Link to='/about' className='hover:bg-gray-300'><FaUserMd />About Us</Link></li>
                        <li><Link to='/blogs' className='hover:bg-gray-300'><MdContactPage />Blogs</Link></li>
                        <li><Link to='/news' className='hover:bg-gray-300'><BsNewspaper />News & Media</Link></li>
                        <li><Link to='/packages' className='hover:bg-gray-300'><FaClipboardList />Packages</Link></li>
                        <li><Link to='/contact' className='hover:bg-gray-300'><RiContactsBookLine />Contact Us</Link></li>
                        <input type="text" placeholder="🔍 Search Here" className="input input-bordered input-success rounded-full input-sm" />
                        <li><a href='tel:+8801628672468' className='mt-10 font-semibold'>📞(+880)1628672468</a></li>
                        <li><a href='mailto:info@promise-hospital.com' className='font-semibold'>📧info@<br />promise-hospital.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav1;