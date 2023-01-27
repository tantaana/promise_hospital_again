import React from 'react'
import { Link } from 'react-router-dom'

const Packages = ({pk}) => {
  const {img, name, location, includes, price, old_price, save, _id} = pk
  // console.log(img)
  return (
    <div className='transform transition duration-500 hover:scale-105 mb-8 mr-10'>
      <div className="h-full w-full card card-compact bg-base-100 rounded-md shadow-xl packes-card">
        <figure><img className='w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-blue-500">{name}</h2>
          <p className='text-xl location'>{location}</p>
          <p className='text-xl includes mb-4'>{includes}</p>
          <hr />
          <div className='flex justify-between mt-4'>
            <div>
              <div className='flex items-center gap-1'>
                <h2 className='text-3xl'>$ {price}</h2>
                <p className='text-xl'><del>${old_price}</del></p>
              </div>
              <p className='text-xl mt-5 text-green-500'>{save}</p>
            </div>
            <div>
              <Link to={`/details/${_id}`}><button className='btn bg-blue-500 text-white font-semibold border-none rounded-sm hover:bg-blue-700'>Explore</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages