import React from 'react'

const PackagesBooking = ({packagesDetails}) => {
    const {location, name} = packagesDetails
    // console.log(packagesDetails)
    return (
        <div className='w-full'>
            <input type="checkbox" id="packages-book" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="packages-book" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <h3 className="font-bold text-blue-500 text-2xl mb-5">International Health Check-up</h3>
                        <div className='w-full mb-3'>
                            <h2 className='text-lg text-blue-500 font-semibold mb-1'>Location</h2>
                            <input className='w-full border p-1 outline-none px-3' value={location} readOnly></input>
                        </div>
                        <div className='mb-3'>
                            <h2 className='text-lg text-blue-500 font-semibold mb-1'>Package</h2>
                            <input className='w-full border p-1 outline-none px-3' value={name} readOnly></input>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <div>
                                <div className='mb-5'>
                                    <h2 className='text-lg text-blue-500 font-semibold mb-1'>Name</h2>
                                    <input className='w-full border p-1 outline-none px-3' placeholder='Enter Name'></input>
                                </div>
                                <div>
                                    <h2 className='text-lg text-blue-500 font-semibold mb-1'>Country Number</h2>
                                    <input className='w-full border p-1 outline-none px-3' placeholder='Enter Country Number'></input>
                                </div>
                            </div>
                            <div>
                                <div className='mb-3'>
                                    <h2 className='text-lg text-blue-500 font-semibold mb-1'>Email Id</h2>
                                    <input className='w-full border p-1 outline-none px-3' placeholder='Enter Email Id'></input>
                                </div>
                                <div>
                                    <h2 className='text-lg text-blue-500 font-semibold mb-1'>Country</h2>
                                    <input className='w-full border p-1 outline-none px-3' placeholder='Enter Country'></input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-lg text-blue-500 font-semibold mb-1'>Your Query</h2>
                            <textarea className='w-full border p-1 outline-none px-3' placeholder='Tell Us About Your Query'/>
                        </div>
                        <div className='text-center mt-3'>
                            <button className='btn btn-primary text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackagesBooking