import React, { useEffect, useState } from 'react';
import './doctorBookingForm.css'
const DoctorBookingForm = ({ anotherLoader }) => {


    return (
        <div className="cardbg-white mx-8">
            {/* <input type="checkbox" id="doctor-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className='modal-box relative'>
                    <label htmlFor="doctor-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    

                    

                    <div className="py-4">
                        <h2 className='ml-6 text-xl font-semibold text-black'>Consultation Details</h2>
                        <div className="grid lg:grid-cols-3 ">
                            <div className=" mr-4 mt-4">
                                <span className="primary-color font-semibold ">Preferred Language</span>
                                <input type="file" className="mt-2 mt-file-input border rounded file-input-bordered file-input-info w-full " />
                            </div>
                            <div className=" mr-4 mt-4">
                                <span className="primary-color font-semibold ">Preferred Language</span>
                                <input type="file" className="mt-2 mt-file-input border rounded file-input-bordered file-input-info w-full " />
                            </div>
                        </div>

                        <div className=" border my-8">
                            <h3 className="bg-primary p-2 text-white font-medium">Select your availability date *</h3>
                            <div className="card-desc my-4 p-2">
                                <p className="mb-2 primary-color font-medium">Slot 1</p>
                                <div className="">
                                    <input className="p-2 mt-2 rounded bg-gray-400 text-gray-100" type="date" name="" id="" />
                                    <button className="border-2 mt-2 lg:ml-8 px-4 py-2 rounded-full primary-color">Add new +</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn1-primary w-36">Submit</button>
                    </div>
                </div>
            </div> */}

            <input type="checkbox" id="doctor-book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-6xl">
                    <label htmlFor="doctor-book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="">

                        <h2 className='ml-6 text-xl font-semibold text-black'>Personal Information*</h2>
                        <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Name</span>
                                <input type="text" placeholder="Enter Name" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Email ID</span>
                                <input type="text" placeholder="Enter email ID" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Patients Contact Number</span>
                                <input type="text" placeholder="Enter Contact Number" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full max-w-xs" />
                            </div>

                            <div className="mt-2">
                                <span className="primary-color font-semibold">Country</span>
                                <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                    <option disabled selected>Select your country</option>
                                    <option>Bangladesh</option>
                                    <option>Cameroon</option>
                                    <option>India</option>
                                    <option>Iraq</option>
                                    <option>Maldives</option>
                                    <option>Sri Lanka</option>
                                    <option>Uganda</option>
                                </select>
                            </div>

                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Language</span>
                                <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                    <option selected>English</option>
                                    <option value="">France</option>
                                    <option value="">Hindi</option>
                                    <option value="">Bangla</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="py-8">
                        <h2 className='ml-6 text-xl font-semibold text-black'>Consultation Details</h2>
                        <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Doctor</span>
                                <input type="text" placeholder="" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full" defaultValue={anotherLoader?.name} readOnly />
                            </div>
                            <div className="mt-2">
                                <span className="primary-color font-semibold">Preferred Location</span>
                                <input type="text" placeholder="Enter email ID" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " />
                            </div>
                        </div>

                        <div className="py-8">
                            <span className="primary-color font-semibold ">Health Issue</span>
                            <textarea className="textarea block bg-white border-gray-400 border w-full mt-2" placeholder="Tell us about your health issue"></textarea>
                        </div>
                    </div>

                    <div className="py-8">
                        <h2 className='ml-6 text-xl font-semibold text-black'>Documents Upload</h2>
                        <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                            <div className="mt-2">
                                <h2 className="primary-color font-semibold mb-2">Patients Passport</h2>
                                <input type="file" className="block w-full text-sm text-black border border-blue-900 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-900 file:text-white
      hover:file:bg-teal-700" />
                            </div>
                            <div className="mt-2">
                                <h2 className="primary-color font-semibold mb-2">Recent Medical Reports</h2>
                                <input type="file" className="block w-full text-sm text-black border border-blue-900 rounded-lg
      file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-900 file:text-white
      hover:file:bg-teal-700" />
                            </div>
                        </div>

                        <div className="py-8">
                            <span className="primary-color font-semibold ">Health Issue</span>
                            <textarea className="textarea block bg-white border-gray-400 border w-full mt-2" placeholder="Tell us about your health issue"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorBookingForm;