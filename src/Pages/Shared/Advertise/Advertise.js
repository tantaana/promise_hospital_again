import React from 'react';
import newYear from '../Navber/Nav2/new_year.png'

const Advertise = () => {
    return (
        <div className='bg-gradient-to-r from-blue-400 to-teal-500 block xl:hidden'>
            <div className='flex justify-around'>
                <img src={newYear} className="h-[100px]" alt="" srcset="" />
                <img src="https://pngfreepic.com/wp-content/uploads/2021/10/offer-48c.png?v=1671298213" className='h-[100px]' alt="" srcset="" />
            </div>
        </div>
    );
};

export default Advertise;