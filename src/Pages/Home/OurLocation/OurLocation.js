import React from 'react'
import './OurLocation.css'
import img1 from '../../../image/location1.png'
import img2 from '../../../image/location2.png'
import img3 from '../../../image/location3.png'
import img4 from '../../../image/location4.png'
import img5 from '../../../image/location5.png'
import img6 from '../../../image/location6.png'

const OurLocation = () => {
    const locations = [
        {
            id: 1,
            area: 'Old Airport Road - Dhaka',
            city: 'Dhaka',
            name: 'Manipal Hospitals Old Airport Road',
            img: img1
        },
        {
            id: 2,
            area: 'Gajipur',
            city: 'Dhaka',
            name: 'Manipal Hospitals Gagipur Road',
            img: img2
        },
        {
            id: 3,
            area: 'Mymenshing Chorpara',
            city: 'Mymenshing',
            name: 'Manipal Hospitals Mymenshing',
            img: img3
        },
        {
            id: 4,
            area: 'Netrokuna City',
            city: 'Netrokuna',
            name: 'Manipal Hospitals',
            img: img4
        },
        {
            id: 5,
            area: 'Durgapur',
            city: 'Netrokuna',
            name: 'Manipal Hospitals Durgapur',
            img: img5
        },
        {
            id: 6,
            area: 'Sylet Cha Bagan',
            city: 'Sylet',
            name: 'Manipal Hospitals',
            img: img6
        },
    ]
    return (
        <div className='locationBG'>
            <div className='p-14'>
                <h2 className='text-4xl text-center text-white font-bold'>Our Location</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10'>
                    {
                        locations.map(location => (
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img src={location.img} alt="Movie" style={{width: 200, height: 208}}/>
                                </figure>
                                <div className="card-body p-3">
                                    <h2 className="card-title">{location.area}</h2>
                                    <p>{location.city}</p>
                                    <p>{location.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurLocation