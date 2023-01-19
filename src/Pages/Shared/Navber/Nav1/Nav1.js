import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { FaUserMd, FaClipboardList, FaHome, FaHospitalUser } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import { RiContactsBookLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Nav1 = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))

    }

    return (
        <div className='sticky xl:relative top-0 z-40 bg-white bg-opacity-75'>
            <div className='bg-gradient-to-r from-teal-500 to-blue-400 hidden xl:flex justify-center gap-4 p-3'>
                <a href='tel:+8801628672468' className='font-semibold text-xl'>📞 (+880)1628672468</a>
                <a href='mailto:info@promise-hospital.com' className='font-semibold text-xl'>📧 info@promise-hospital.com</a>
            </div>

            <div className='flex justify-between m-2'>
                <Link className="btn bg-transparent border-none hover:bg-transparent normal-case text-3xl" to='/'>
                    <div>
                        <div>
                            <span className='text-blue-700'>promise</span><span className='text-teal-500'>hospital</span>
                        </div>
                        <div className='flex justify-end'>
                            <h2 className='text-blue-500 text-sm'>Beside you forever ❤️</h2>
                        </div>
                    </div>
                </Link>

                <div className='hidden items-center xl:flex gap-4'>
                    <div className='flex items-center gap-4'>
                        <input type="text" placeholder="🔍 Search Here" className="input input-bordered input-success rounded-full border border-2" />
                        <div>
                            {
                                user?.uid ?
                                    <div className='hidden xl:flex justify-end items-center gap-4 p-2'>
                                        <div className='avatar online'>
                                            <div className='w-14 rounded-full'>
                                                {user.photoURL ?
                                                    <img src={user.photoURL} alt="" /> :
                                                    <img src="https://www.pinkvilla.com/english/images/2022/10/1942600650_hrithik-roshan-fighter-main-final_640*360.jpg" alt="" />}
                                            </div>
                                        </div>
                                        <h2 className='text-xl font-semibold'>{user.displayName}</h2>
                                        <button onClick={handleLogOut} className='btn glass bg-red-400 hover:bg-red-500 text-black btn-outline'>Sign Out</button>
                                    </div>
                                    :
                                    <div className='hidden xl:flex justify-end items-center gap-4 p-2'>
                                        <Link to='/login'><button className='btn glass bg-blue-400 hover:bg-blue-600 text-black btn-outline'>Log In</button></Link>
                                        <Link to='/signup'><button className='btn glass bg-green-400 hover:bg-green-600 text-black btn-outline'>Sign Up</button></Link>

                                    </div>
                            }
                        </div>

                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn hover:bg-teal-500 m-1 text-3xl bg-transparent border border-teal-700 rounded-2xl text-black"><BiMenu /></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52 text-lg font-semibold bg-gradient-to-r from-blue-300 to-teal-300">
                            <li><Link to='/stories' className='hover:bg-gray-300'><BiHappyBeaming />Success Stories</Link></li>
                            <li><Link to='/about' className='hover:bg-gray-300'><FaUserMd />About Us</Link></li>
                            <li><Link to='/blogs' className='hover:bg-gray-300'><MdContactPage />Blogs</Link></li>
                            <li><Link to='/news' className='hover:bg-gray-300'><BsNewspaper />News & Media</Link></li>
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
                        <li><Link to='/packages' className='hover:bg-gray-300'><FaClipboardList />Health Packages</Link></li>
                        <li><Link to='/plan' className='hover:bg-gray-300'><ImAirplane />Plan Your Visit</Link></li>
                        <li><Link to='/stories' className='hover:bg-gray-300'><BiHappyBeaming />Success Stories</Link></li>
                        <li><Link to='/about' className='hover:bg-gray-300'><FaUserMd />About Us</Link></li>
                        <li><Link to='/blogs' className='hover:bg-gray-300'><MdContactPage />Blogs</Link></li>
                        <li><Link to='/news' className='hover:bg-gray-300'><BsNewspaper />News & Media</Link></li>

                        <li><Link to='/contact' className='hover:bg-gray-300'><RiContactsBookLine />Contact Us</Link></li>
                        <input type="text" placeholder="🔍 Search Here" className="input input-bordered input-success rounded-full input-sm" />
                        {
                            user?.uid ?
                                <div className='mt-4'>
                                    <div className='flex justify-center mb-2'>
                                        <div className='avatar online'>
                                            <div className='w-12 rounded-full'>
                                                {user.photoURL ?
                                                    <img src={user.photoURL} alt="" /> :
                                                    <img src="https://www.pinkvilla.com/english/images/2022/10/1942600650_hrithik-roshan-fighter-main-final_640*360.jpg" alt="" />}
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className='text-lg font-semibold text-center mb-2'>{user.displayName}</h2>
                                    <div className='flex justify-center'>
                                        <button onClick={handleLogOut} className='btn btn-error glass btn-outline btn-sm font-semibold'>Sign Out</button>
                                    </div>
                                </div>
                                :
                                <div className='flex justify-center gap-2 mt-4'>
                                    <Link to='/login'><button className='btn btn-outline glass btn-primary btn-sm font-semibold'>Log In</button></Link>
                                    <Link to='/signup'><button className='btn btn-outline btn-success btn-sm glass font-semibold'>Sign Up</button></Link>

                                </div>
                        }
                        <li><a href='tel:+8801628672468' className='mt-10 font-semibold'>📞(+880)1628672468</a></li>
                        <li><a href='mailto:info@promise-hospital.com' className='font-semibold'>📧info@<br />promise-hospital.com</a></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Nav1;