import React from 'react';
import './ConnectUs.css';
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";




const ConnectUs = () => {
    return (
        <div className=''>
            <div className=" w-full">
                <div className=" w-full">
                    <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/banner/desktop/get-in-touch-with-us-manipal.png" className="w-full" alt='' />
                </div>
            </div>

            <div className='mx-16'>
                <div className='mx-5 my-5 text-4xl'>
                    Contact Us
                </div>
                <div className='one my-5 '>
                    <div className='two'>
                        <div className='three '>
                            <div className='mx-5'>


                                <label ><b>Patients Name *</b></label><br></br>
                                <input name="title" type="text" placeholder="Enter Name " className="input input-bordered input-accent w-full text-lg" />

                                <br />
                                <br />



                                <label ><b>Patients Contact Number *</b></label>
                                <input name="title" type="text" placeholder="Enter Number " className="input input-bordered input-accent w-full  text-lg" />

                                <br />
                                <br />

                            </div>
                            <div className='mx-5'>


                                <label ><b>Service Title</b></label>
                                <input name="title" type="text" placeholder="Service Title" className="input input-bordered input-accent w-full text-lg" />

                                <br />
                                <br />














                                <lebel><b>Country *</b></lebel>
                                <br />
                                <select name="" className="p-3 border-r-2 br ">
                                    <option value="sepecilaty w-full">Select an option</option>
                                    <option value="sepecilaty w-full">Search by Doctor Name</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="India">India</option>
                                </select>










                                <br />


                                <br />

                            </div>

                        </div>
                        <div className='mx-5'>


                            <lebel><b>Location</b></lebel>
                            <br />
                            <select name="" className="p-3 border-r-2 br ">
                                <option value="sepecilaty w-full">Natore</option>
                                <option value="0">Dhaka</option>
                            </select>





                            <div className='mb-5'>
                                <label ><b>Enquiry *</b></label><br></br>
                                <textarea id="" cols="30" rows="3" className='border w-full bg-gray-100 outline-none rounded-sm px-3'></textarea>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-primary shadow-xl text-white' style={{ background: "linear-gradient(90deg,#034ea1 0,#00b7ac 100%)" }}>Send message</button>
                            </div>








                        </div>

                    </div>

                    <div>
                        <h1>Selected centre</h1>
                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='pb-5' >
                            <div className='m-3'>
                                <p>
                                    98, HAL Old Airport Road, Boraigram, Natore, Rzshahi
                                </p>
                                <br />
                                <p>
                                    Kabla: Kabla International Airport
                                </p>
                                <br />
                                <br />
                                <p>
                                    Natore Railway Station: Natore City Railway Station
                                </p>
                            </div>


                        </div>

                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='my-5' >
                            <p className='p-3  fl'   >
                                < AiOutlineMail />  solymanbijoy@outlook.com
                            </p>

                        </div>


                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='my-5' >
                            <p className='p-3 fl' >

                                <div><BsWhatsapp /></div>  <div>01324129983 </div>
                            </p>

                        </div>

                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='my-5' >
                            <p className='p-3 fl' >
                                <BsLightbulb />  Get a Second Opinion

                            </p>

                        </div>


                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='my-5' >
                            <p className='p-3 fl' >
                                <FaVideo />
                                Get video consultation

                            </p>

                        </div>


                        <div style={{ border: '1px solid black', background: '#F3F0F0', borderRadius: '3px' }} className='my-5' >
                            <p className='p-3 ' >
                                Plan your Visit
                            </p>

                        </div>




                    </div>




                </div>
            </div>

        </div>
    );
};

export default ConnectUs;