import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import icon from '../Specialities/SpecialitiesImg/errow.jpg'


const OurSeciality = ({imag}) => {
    const {img ,name ,_id} = imag
    return (
        <div>
            <div className="hero  bg-base-500  border border-gray-500">
  <div className="hero-content flex-col ">
    <div className="">
      <h1 className="text-xl ">{name}</h1>
      </div>
    <div className="avatar justify-start text-start ">
  <div className="w-24 rounded">
    <img src={img} />
    
  </div>
  
</div>
<div className='ml-96 '>
    <div className="avatar justify-end ml-11">
  <div className="w-8 rounded">
   <Link to={`/specialitiesDetails/${_id}`}><button ><FaArrowAltCircleRight color='#034ea1' ></FaArrowAltCircleRight></button></Link> 
  </div>
</div>
</div>

  </div>
  
</div>

        </div>
    );
};

export default OurSeciality;