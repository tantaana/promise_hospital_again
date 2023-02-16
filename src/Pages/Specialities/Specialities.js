import React from 'react';
import banner from '../Specialities//SpecialitiesImg/bannersp.jpg'
import OurSeciality from './OurSeciality';
import OurSpecialities from './OurSpecialities';
const Specialities = () => {
  return (
    <div >
      <img src={banner} className='w-full object-cover h-[600px]'></img>
      <OurSpecialities></OurSpecialities>

    </div>
  );
};

export default Specialities;