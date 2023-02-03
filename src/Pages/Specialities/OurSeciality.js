import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import icon from '../Specialities/SpecialitiesImg/errow.jpg'


const OurSeciality = ({imag}) => {
    const {image ,name ,_id} = imag
    return (
       <Link to={`/specialitiesDetails/${_id}`}><div>
            <div className="hero  bg-base-500  border border-gray-500">
  <div className="hero-content flex-col ">
    <div className="hover:scale-110 transition duration-300 ease-in-out">
      <h1 className="text-xl ">{name}</h1>
      </div>
    <div className="avatar justify-start text-start ">
  <div className="w-24 rounded hover:scale-110 transition duration-300 ease-in-out">
    <img  src={image} />
    
  </div>
  
</div>
<div className='ml-10 md:ml-20 xl:ml-24 2xl:ml-28 '>
    <div className="avatar justify-end ml-11">
  <div className="w-8 rounded">
   {/* <Link ><button ><FaArrowAltCircleRight color='#034ea1' ></FaArrowAltCircleRight></button></Link>  */}
  </div>
</div>
</div>

  </div>
  
</div>

        </div></Link> 
    );
};

export default OurSeciality;