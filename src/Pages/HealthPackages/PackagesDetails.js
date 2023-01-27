import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { HiArrowSmLeft, IconName } from "react-icons/hi";
import pic from '../../image/detailsPackagesImg.png'

const PackagesDetails = () => {
  const packagesDetails = useLoaderData()
  const { img, name, price } = packagesDetails
  // console.log(img, name)
  return (
    <div>
      <div className='detailsPages'>
        <div className='flex justify-between'>
          <div className='w-2/4 ml-24 pt-20'>
            <Link to='/packages'><button className='btn bg-white rounded-sm text-black hover:bg-white border-none btn-sm px-5 py-2 font-bold mb-5'><HiArrowSmLeft className='mr-2 text-xl'></HiArrowSmLeft> Go Back</button></Link>
            <h2 className='text-6xl leading-snug font-bold'>{name}</h2>
            <p className='text-3xl mt-4 text-blue-500 font-semibold'>Package Cost-${price}</p>
          </div>
          <div className='mt-20 pr-10'>
            <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white block mb-3 font-semibold'>Video consulation</button>
            <button className='w-full btn bg-white text-blue-500 border-none hover:bg-white font-semibold'>Get a second opinion</button>
          </div>
        </div>
      </div>
      <div className='bg-blue-500 p-16'>
        <div className='des p-10 flex justify-between'>
          <div className='w-2/4 text-white'>
            <h2 className='text-4xl mb-7 font-bold'>Package Description</h2>
            <p className='text-xl'>About 30% of the young Indians are at risk of developing lifestyle diseases such as obesity, diabetes mellitus,hypertension and cardiac disease, due to various lifestyle practices including irregular meals, lack of physical activity, inadequate sleep, smoking or alcohol consumption. This Checkup helps in early detection of serious health problems including diabetes, abnorma thyroid levels, liver abnormalities, impaired kidney function , anemia, poor immunity, and elevated
              cholesterol levels.</p>
          </div>
          <div>
            <img src={pic}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesDetails