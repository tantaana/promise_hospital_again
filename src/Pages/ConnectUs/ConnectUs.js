import React from 'react';
import   './ConnectUs.css';

const ConnectUs = () => {
    return (
        <div className=''>
           <div className='one my-16 mx-16'>
                <div className='two'>
                    <div className='three '>
                        <div className='mx-5'>
                        
                            <label ><b>Patients Name *</b></label><br></br>
                            <input name="title" type="text"   placeholder="Enter Name " className="input input-bordered input-accent w-full text-lg" />
                  
                            <br />
                            <br/>


                            <label ><b>Patients Contact Number *</b></label>
                            <input name="title" type="text"   placeholder="Enter Number " className="input input-bordered input-accent w-full  text-lg" />
                  
                            <br />

                        </div>
                        <div className='mx-5'>
                         

                            <label ><b>Service Title</b></label>
                            <input name="title" type="text"   placeholder="Service Title" className="input input-bordered input-accent w-full text-lg" />
                  
                            <br />
                            <br/>
                           













                   <lebel><b>Country *</b></lebel>
                   <br/>
                    <select name="" className="p-4 border-r-2 br ">
                        <option value="sepecilaty w-full">Select an option</option>
                       <option  value="0">kkkkk</option>
                    </select>
                   
                









                            
                  
                            <br />

                        </div>

                    </div>
                    <div className='mx-5'>
                   

                        <lebel><b>Location</b></lebel>
                   <br/>
                    <select name="" className="p-4 border-r-2 br ">
                        <option value="sepecilaty w-full">Search by Doctor Name</option>
                       <option  value="0">kkkkk</option>
                    </select>
                   




                            <div className='mb-5'>
                            <label ><b>Enquiry *</b></label><br></br>
                        <textarea  id="" cols="30" rows="3" className='border w-full bg-gray-100 outline-none rounded-sm px-3'></textarea>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary shadow-xl text-white'>Send message</button>
                    </div>








                    </div>

                </div>

                <div>
                    <h1>Selected centre</h1>
                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='pb-5' >
                        <div className='m-3'>
                        <p>
                        98, HAL Old Airport Road, Boraigram, Natore, Rzshahi
                        </p>
                        <br/>
                        <p>
                        Kabla: Kabla International Airport
                        </p>
                        <br/>
                        <br/>
                        <p>
                        Natore Railway Station: Natore City Railway Station
                        </p>
                        </div>
                        

                    </div>

                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='my-5' >
                        <p className='p-3' >
                        solymanbijoy@outlook.com
                        </p>

                    </div>


                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='my-5' >
                        <p className='p-3' >
                        01324129983
                        </p>

                    </div>

                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='my-5' >
                        <p className='p-3' >
                        Get a Second Opinion
                        </p>

                    </div>


                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='my-5' >
                        <p className='p-3' >
                        Get video consultation
                        </p>

                    </div>


                    <div style={{border:'1px solid black',background:'#F3F0F0',borderRadius:'3px'}} className='my-5' >
                        <p className='p-3' >
                        Plan your Visit
                        </p>

                    </div>




                </div>




           </div>
            
        </div>
    );
};

export default ConnectUs;