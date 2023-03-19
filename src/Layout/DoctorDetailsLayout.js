import { useRef, React } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiUserSettingsFill } from 'react-icons/ri'
import { MdOutlineSettingsSuggest } from 'react-icons/md'
import { TbLanguageHiragana } from 'react-icons/tb'
import { FaAward } from 'react-icons/fa';
import { RiPagesFill } from 'react-icons/ri';
import './DoctorDetailsLayout.css'
import { Pdf } from 'react-to-pdf'


const DoctorDetailsLayout = ({ doctorData }) => {
    const { others } = doctorData;

    const activeLinks = ({ isActive }) => {
        return {
            background: isActive ? 'white' : '',
            color: isActive ? '#1e3a8a' : '',
        }
    }

    return (
        <div className='flex justify-center mx-6 mb-20'>
            <div className='w-full md:w-5/6 lg:w-2/3'>
                <div className='flex flex-col gap-1'>
                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-gradient-to-r from-blue-900 to-teal-500 text-xl md:text-2xl text-white peer-checked:bg-gradient-to-r peer-checked:from-teal-500 peer-checked:to-teal-500 peer-checked:text-black peer-checked:border-l-8 peer-checked:border-blue-900 flex items-center rounded-xl gap-4">
                            <span className='text-4xl'><RiUserSettingsFill /></span> Fellowship & Membership
                        </div>
                        <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-secondary-content shadow-2xl peer-checked:shadow-2xl ">
                            <h2 className='mt-4 p-2 text-base md:text-lg font-semibold'>{others?.fellowship ? others?.fellowship : <p className='text-red-600'>No Data Found</p>}</h2>
                        </div>
                    </div>

                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-gradient-to-r from-blue-900 to-teal-500 text-xl md:text-2xl text-white peer-checked:bg-gradient-to-r peer-checked:from-teal-500 peer-checked:to-teal-500 peer-checked:text-black peer-checked:border-l-8 peer-checked:border-blue-900 rounded-xl flex items-center gap-4">
                            <span className='text-4xl'><MdOutlineSettingsSuggest /></span> Field of Expertise
                        </div>
                        <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                            <h2 className='mt-4 p-2 text-base md:text-lg font-semibold'>{others?.expertise ? others?.expertise : <p className='text-red-600'>No Data Found</p>}</h2>
                        </div>
                    </div>

                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-gradient-to-r from-blue-900 to-teal-500 text-xl md:text-2xl text-white peer-checked:bg-gradient-to-r peer-checked:from-teal-500 peer-checked:to-teal-500 peer-checked:text-black peer-checked:border-l-8 peer-checked:border-blue-900 rounded-xl flex items-center gap-4">
                            <span className='text-4xl'><TbLanguageHiragana /></span> Languages Spoken
                        </div>
                        <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                            <h2 className='mt-4 p-2 text-base md:text-lg font-semibold'>{others?.languages ? others?.languages : <p className='text-red-600'>No Data Found</p>}</h2>
                        </div>
                    </div>

                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-gradient-to-r from-blue-900 to-teal-500 text-xl md:text-2xl text-white peer-checked:bg-gradient-to-r peer-checked:from-teal-500 peer-checked:to-teal-500 peer-checked:text-black peer-checked:border-l-8 peer-checked:border-blue-900 rounded-xl flex items-center gap-4">
                            <span className='text-4xl'><RiPagesFill /></span> Talks & Publications
                        </div>
                        <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                            <h2 className='mt-4 p-2 text-base md:text-lg font-semibold'>{others?.publications ? others?.publications : <p className='text-red-600'>No Data Found</p>}</h2>
                        </div>
                    </div>

                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-gradient-to-r from-blue-900 to-teal-500 text-xl md:text-2xl text-white peer-checked:bg-gradient-to-r peer-checked:from-teal-500 peer-checked:to-teal-500 peer-checked:text-black peer-checked:border-l-8 peer-checked:border-blue-900 rounded-xl flex items-center gap-4">
                            <span className='text-4xl'><FaAward /></span> Awards & Achievements
                        </div>
                        <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                            <h2 className='mt-4 p-2 text-base md:text-lg font-semibold'>{others?.awards ? others?.awards : <p className='text-red-600'>No Data Found</p>}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsLayout;