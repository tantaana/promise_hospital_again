import React from 'react';
import newYear from '../Navber/Nav2/new_year.png'
import anotherPic1 from '../../Shared/Navber/Nav2/another.webp'

const Advertise = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 to-teal-500 block xl:hidden'>
            <div className='flex justify-around'>
                <div className='flex'>
                    <img src={newYear} className="h-[50px] sm:h-[80px]" alt="" srcset="" />
                    <img src={anotherPic1} className="h-[50px] sm:h-[80px]" alt="" srcset="" />
                </div>
                <div className='flex'>
                    <img src="https://pngfreepic.com/wp-content/uploads/2021/10/offer-48c.png?v=1671298213" className='h-[50px] sm:h-[80px]' alt="" srcset="" />
                    <img src="https://static.vecteezy.com/system/resources/previews/008/880/269/original/discount-40-percent-luxury-gold-offer-in-3d-png.png" className='h-[50px] sm:h-[80px]' alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Advertise;