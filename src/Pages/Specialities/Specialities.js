import React from 'react';
import banner from '../Specialities//SpecialitiesImg/bannersp.jpg'
import OurSeciality from './OurSeciality';
import OurSpecialities from './OurSpecialities';
const Specialities = () => {
  return (
    <div >
      <img src={banner} className='w-full ' style={{height:500}}></img>
       <OurSpecialities></OurSpecialities>
      
        </div>
  );
};

export default Specialities;