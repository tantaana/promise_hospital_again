import React, { useState } from 'react';
import OurSeciality from './OurSeciality';
import { useEffect } from 'react';
import imgCircle from '../../assets/loading-circle.gif'

const OurSpecialities = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [loader, setLoader] = useState(false);
    // const pages = Math.ceil(count / size);
    const locationList = [
        { _id: '1', location: 'Dhaka' },
        { _id: '2', location: 'Chittagong' },
        { _id: '3', location: 'Rajshahi' },
        { _id: '4', location: 'Khulna' },
        { _id: '5', location: 'Barisal' },
        { _id: '6', location: 'Sylhet' },
        { _id: '7', location: 'Mymensingh' },
        { _id: '8', location: 'Rangpur' }
    ]


    const [specialities, setSpecialities] = useState([]);
    useEffect(() => {
        setLoader(true);
        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/specialities')
            .then(res => res.json())
            .then(data => {
                setLoader(false);
                setSpecialities(data)
            })
    }, []);

    return (
        <div className='my-10'>
            <div className='flex justify-center mr-0 xl:justify-end xl:mr-4'>
                <select name='location' className="select select-primary w-full max-w-xs rounded-none" required>
                    <option value="" disabled selected className='text-gray-400'>See our location</option>

                    {
                        locationList.map(location =>
                            <option key={location._id} value={location.location}>{location.location}</option>)
                    }
                </select>
            </div>

            <p className='my-10 text-blue-900 text-3xl xl:text-4xl font-semibold text-center'>All Our Specialities</p>

            <div className='flex justify-center mb-4'>
                {
                    loader ?
                        <div class="flex flex-col">
                            <div class="w-12 h-12 rounded-full animate-spin
                        border-4 border-solid border-blue-900 border-t-transparent shadow-md"></div>


                        </div>
                        : ''
                }
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-6 gap-6'>

                {
                    specialities.map(imag => <OurSeciality
                        key={imag._id}
                        imag={imag}

                    ></OurSeciality>)

                }
            </div>
            
        </div>
    );
};

export default OurSpecialities;