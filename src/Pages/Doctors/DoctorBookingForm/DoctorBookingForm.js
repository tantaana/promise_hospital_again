import React from 'react';
import './doctorBookingForm.css'
const DoctorBookingForm = () => {
    return (
        <div className="cardbg-white mx-8">
            <div className="card-body">
                <div className="">
                    <button className=" bg-gray-200 w-full text-left p-4 rounded btn" disabled>Personal Information *</button>
                    <div className="fast-input-fild grid gap-10 lg:grid-cols-3 py-8">
                        <div className="mt-2">
                            <span className="primary-color font-semibold">Patients Name</span>
                            <input type="text" placeholder="Enter Name" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " />
                        </div>
                        <div className="mt-2">
                            <span className="primary-color font-semibold">Patients Email Id</span>
                            <input type="text" placeholder="Enter your id" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full " />
                        </div>
                        <div className="mt-2">
                            <span className="primary-color font-semibold">Patients Contact Number</span>
                            <input type="text" placeholder="Enter Contact Number" className="block mt-2 input bg-white border-gray-400 border input-bordered input-sm w-full max-w-xs" />
                        </div>

                        <div className="mt-2">
                            <span className="primary-color font-semibold">Country</span>
                            <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                <option disabled selected>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                            </select>
                        </div>

                        <div className="mt-2">
                            <span className="primary-color font-semibold">Preferred Language</span>
                            <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                <option selected>English</option>
                                <option value="">France</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <button className=" bg-gray-200 w-full text-left p-4 rounded btn" disabled>Consultation Details </button>
                    <div className="grid gap-10 lg:grid-cols-3 ">
                        <div className="mt-2">
                            <span className="primary-color font-semibold">Country</span>
                            <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                <option disabled selected>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                                <option>Camaroon</option>
                            </select>
                        </div>

                        <div className="mt-2">
                            <span className="primary-color font-semibold">Preferred Language</span>
                            <select className="select select-bordered block bg-white mt-2 border-gray-400 border select-sm w-full ">
                                <option selected>English</option>
                                <option value="">France</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>
                    </div>

                    <div className="py-8">
                        <span className="primary-color font-semibold ">Preferred Language</span>
                        <textarea className="textarea block bg-white border-gray-400 border w-full mt-2" placeholder="Tell us about your Health issue"></textarea>
                    </div>
                </div>

                <div className="py-4">
                    <button className=" bg-gray-200 w-full text-left p-4 rounded btn" disabled>Consultation Details </button>
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
        </div>
    );
};

export default DoctorBookingForm;