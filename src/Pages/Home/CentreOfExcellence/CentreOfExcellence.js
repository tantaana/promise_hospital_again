import React from 'react'
import img1 from '../../../image/cardiology-and-cardiac-surgery-icon.png'
import img2 from '../../../image/laparoscopic-surgery-icon.png'
import img3 from '../../../image/Organ-Transplants-icon.png'
import img4 from '../../../image/urology-icon-icon.png'
import img5 from '../../../image/spine-care-icon-icon.png'
import img6 from '../../../image/cardithoraic-vascular-surgery-icon.png'
import { Link } from 'react-router-dom'

const CentreOfExcellence = () => {
    const lists = [
        {
            id: 1,
            img: img1,
            name: 'Laparoscopic Surgery'
        },
        {
            id: 2,
            img: img2,
            name: 'Organ Transplants'
        },
        {
            id: 3, 
            img: img3,
            name: 'Comprehensive Cancer Care'
        },
        {
            id: 4,
            img: img4,
            name: 'Nephrology'
        },
        {
            id: 5,
            img: img5,
            name: "Spine Care"
        },
        {
            id: 6,
            img: img6,
            name: 'Cardithoraic Vascular'
        }
    ]
  return (
    <div className='p-14'>
        <div>
            <h2 className='text-4xl text-center text-blue-500 font-bold'>Centre Of Excellence</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-5'>
                {
                    lists.map(list => (
                        <div className='flex gap-10 items-center mb-10 bg-blue-200 mr-10 p-6 rounded-md hover:bg-blue-500 hover:text-white transition'>
                            <div>
                                <img src={list.img} alt="" />
                            </div>
                            <div>
                                <h2 className='text-2xl'>{list.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-center'>
                <Link to='/specialities'><button className='btn bg-blue-500 rounded-md text-white hover:bg-blue-600 border-none'>View All</button></Link>
                
            </div>
        </div>
    </div>
  )
}

export default CentreOfExcellence