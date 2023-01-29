import React from 'react'

const TestsIncluded = ({ packagesDetails }) => {
    const { test1, test2, test3 } = packagesDetails
    console.log(packagesDetails)
    return (
        <div className='bg-blue-500 lg:p-16 sm:p-5 pt-0'>
            {
                test1 && test2 && test3 &&

                <div className='bg-white p-10 rounded-md'>
                    <div>
                        <h2 className='text-4xl text-center text-blue-500 font-bold mb-8'>Tests Included</h2>
                    </div>
                    <div className='lg:flex sm:grid justify-between'>
                        <div className='text-xl'>
                            {
                                test1.map(test => <li className='mb-1'>{test}</li>)
                            }
                        </div>
                        <div className='text-xl'>
                            {
                                test2.map(test => <li className='mb-1'>{test}</li>)
                            }
                        </div>
                        <div className='text-xl'>
                            {
                                test3.map(test => <li className='mb-1'>{test}</li>)
                            }
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn bg-primary hover:bg-primary border-none text-white font-semibold mt-5'>Make an Enquiry</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default TestsIncluded