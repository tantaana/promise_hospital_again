import React, { useContext, useRef, useId } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import { FaUserMd, FaClipboardList, FaHome, FaHospitalUser } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { GiFallingStar } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { ImAirplane } from "react-icons/im";
import { BiAbacus } from "react-icons/bi";
import { MdAddCall } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FaHeartbeat } from "react-icons/fa";
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';

const Nav1 = () => {
    const { user, logOut } = useContext(AuthContext);
    const utcTime = "" + Math.floor((new Date()).getTime() / 1000);
    var parts = utcTime.match(/.{1,3}/g);

    const meetID = parts.join("-");
    const activeLinks = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'white' : '',
        }
    }

    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))

    }

    return (
        <div className='sticky xl:relative top-0 z-40 bg-white bg-opacity-75'>
            <div className='bg-gradient-to-r from-teal-500 to-blue-400 hidden xl:flex justify-center gap-4 p-3'>
                <a href='tel:+8801628672468' className='font-semibold text-xl flex items-center justify-center gap-3'><MdAddCall className='text-3xl text-rose-700 font-bold' /> <span>(+880)1628672468</span></a>
                <a href='mailto:info@promise-hospital.com' className='font-semibold text-xl flex items-center justify-center gap-3'><GrMail className='text-3xl text-blue-700 font-bold' /> <span>info@promise-hospital.com</span></a>
            </div>

            <div className='flex justify-between p-2 m-0 xl:p-0'>
                <Link className="btn bg-transparent border-none hover:bg-transparent normal-case text-3xl" to='/'>
                    <div>
                        <div>
                            <span className='text-blue-900'>promise</span><span className='text-teal-500'>hospital</span>
                        </div>
                        <div className='flex justify-end'>
                            <h2 className='text-blue-500 text-sm flex items-center justify-center gap-1'><span>Beside you forever</span> <FaHeartbeat className='text-rose-600 font-bold text-xl' /></h2>
                        </div>
                    </div>
                </Link>

                <div className='hidden items-center xl:flex gap-4'>
                    <div className='flex items-center gap-4'>
                        <input type="text" placeholder="🔍 Search Here" className="input input-bordered input-success rounded-full border-2" />
                        <div>
                            {
                                user?.uid ?
                                    <div className='hidden xl:flex justify-end items-center gap-4 p-2'>
                                        <div className='avatar online'>
                                            <div className='w-12 rounded-full'>
                                                {user.photoURL ?
                                                    <img src={user.photoURL} alt="" /> :
                                                    <img src="https://www.pinkvilla.com/english/images/2022/10/1942600650_hrithik-roshan-fighter-main-final_640*360.jpg" alt="" />}
                                            </div>
                                        </div>
                                        <h2 className='text-xl font-semibold'>{user.displayName}</h2>
                                        <Link to={`/meet?id=${meetID}`}><button className='btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline'>Join meet</button></Link>
                                        <button onClick={handleLogOut} className='btn glass bg-red-500 hover:bg-red-600 text-black btn-outline'>Sign Out</button>
                                    </div>
                                    :
                                    <div className='hidden xl:flex justify-end items-center gap-4 p-2'>

                                        <Link to='/login'><button className='btn glass bg-blue-500 hover:bg-blue-600 text-black btn-outline'>Log In</button></Link>
                                        <Link to='/signup'><button className='btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline'>Sign Up</button></Link>


                                    </div>
                            }
                        </div>

                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn hover:bg-teal-500 m-1 text-3xl bg-transparent border border-teal-700 rounded-2xl text-black"><BiMenu /></label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow w-56 text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-300 m-1">
                            {/* <label htmlFor="dashboard-drawer" className="">
                                
                            </label> */}
                            {user?.uid && <li onClick={handleClick}><NavLink to='/dashboard' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1'><BiAbacus />Dashboard</NavLink></li>}
                            <li onClick={handleClick}><NavLink to='/stories' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1'><BiHappyBeaming />Success Stories</NavLink></li>
                            <li onClick={handleClick}><NavLink to='/about' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1'><FaUserMd />About Us</NavLink></li>
                            <li onClick={handleClick}><NavLink to='/blogs' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1'><MdContactPage />Blogs</NavLink></li>
                            <li onClick={handleClick}><NavLink to='/news' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1'><BsNewspaper />News & Media</NavLink></li>
                            <li onClick={handleClick}><NavLink to='/contact' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900'><RiContactsBookLine />Contact Us</NavLink></li>

                        </ul>
                    </div>
                </div>

                <div className="dropdown dropdown-end block xl:hidden">
                    <label tabIndex={0} className="btn hover:bg-teal-500 m-1 text-3xl bg-transparent border-none text-black"><BiMenu /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gradient-to-r from-blue-400 to-teal-300 w-56 break-all">
                        {/* <label htmlFor="dashboard-drawer" className="">
                           
                        </label> */}

                        <li onClick={handleClick}><Link to='/' className='flex justify-center text-3xl mb-1'><FaHome /></Link></li>
                        {user?.uid && <li onClick={handleClick}><NavLink to='/dashboard' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><BiAbacus />Dashboard</NavLink></li>}
                        <li onClick={handleClick}><NavLink to='/doctors' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><FaHospitalUser />Doctors</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/specialities' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><GiFallingStar />Specialities</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/packages' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><FaClipboardList />Health Packages</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/plan' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><ImAirplane />Plan Your Visit</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/stories' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><BiHappyBeaming />Success Stories</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/about' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><FaUserMd />About Us</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/blogs' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><MdContactPage />Blogs</NavLink></li>
                        <li onClick={handleClick}><NavLink to='/news' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-1 font-semibold'><BsNewspaper />News & Media</NavLink></li>

                        <li onClick={handleClick}><NavLink to='/contact' style={activeLinks} className='text-black hover:bg-white hover:text-blue-900 mb-2 font-semibold'><RiContactsBookLine />Contact Us</NavLink></li>
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
                                    <Link to='/login'><button className='btn btn-outline glass hover:bg-blue-600 btn-sm font-semibold text-blue-800 hover:text-white'>Log In</button></Link>
                                    <Link to='/signup'><button className='btn btn-outline btn-success btn-sm glass font-semibold'>Sign Up</button></Link>

                                </div>
                        }
                        <li><a href='tel:+8801628672468' className='mt-10 font-semibold flex items-center gap-1'><MdAddCall className='text-xl text-rose-700 font-bold' /><span>(+880)1628672468</span></a></li>
                        <li><a href='mailto:info@promise-hospital.com' className='font-semibold flex items-center gap-1'><GrMail className='text-3xl text-blue-700 font-bold' /><span>info@<br />promise-hospital.com</span></a></li>
                    </ul>
                </div>
            </div>


        </div >
    );
};

export default Nav1;