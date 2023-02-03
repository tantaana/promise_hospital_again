import React from 'react'
import { Link } from 'react-router-dom'
import { HiArrowSmLeft, IconName } from "react-icons/hi";
import pic from '../../../image/detailsPackagesImg.png'

const PackagesDescription = ({packagesDetails}) => {
    const { img, name, price, des } = packagesDetails
    return (
        <div>
            <div className='detailsPages'>
                <div className='lg:flex lg:justify-between sm:grid'>
                    <div className='w-2/4 ml-24 pt-20'>
                        <Link to='/packages'><button className='btn bg-white rounded-sm text-black hover:bg-white border-none btn-sm px-5 py-2 font-bold mb-5'><HiArrowSmLeft className='mr-2 text-xl'></HiArrowSmLeft> Go Back</button></Link>
                        <h2 className='lg:text-6xl sm:text-2xl leading-snug font-bold'>{name}</h2>
                        <p className='lg:text-3xl sm:text-xl mt-4 text-blue-500 font-semibold'>Package Cost-${price}</p>
                    </div>
                    <div className='mt-20 pr-10'>
                        <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white block mb-3 font-semibold'>Video consulation</button>
                        <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white font-semibold'>Get a second opinion</button>
                    </div>
                </div>
            </div>
            <div className='bg-blue-500 lg:p-16 sm:p-14'>
                <div className='des p-10 lg:flex lg:justify-between sm:mb-4'>
                    <div className='lg:w-2/4 sm:w-full text-white'>
                        <h2 className='lg:text-4xl sm:text-4xl mb-7 font-bold'>Package Description</h2>
                        <p className='lg:text-xl sm:text-xs mb-5'>{des}</p>
                    </div>
                    <div>
                        <img src={pic}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PackagesDescription