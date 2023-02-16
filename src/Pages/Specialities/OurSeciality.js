import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg1 from '../Specialities/SpecialitiesImg/bg1.jpg'


const OurSeciality = ({ imag }) => {
  const { img, speciality, _id, speciality_id } = imag
  // console.log(img)
  return (
    <Link to={`/specialities/${speciality_id}`}>

      <div className='flex items-center hover:bg-blue-200 scale-100 hover:scale-105  ease-in-out duration-200 gap-4 border border-teal-500 border-4 rounded-xl p-2'>
        <img src={img} alt="" srcset="" />
        <h2 className='text-blue-900 font-semibold text-lg'>{speciality}</h2>
      </div>

    </Link>
  );
};

export default OurSeciality;