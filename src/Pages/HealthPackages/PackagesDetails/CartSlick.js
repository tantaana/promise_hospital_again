import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Packages from '../Packages/Packages';



const CartSlick = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('https://promise-hospoital-server-jahid900pj.vercel.app/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (

        <div className='package p-16 pt-7'>
            <h2 className='text-4xl mb-5 text-blue-500'>Explore More</h2>
            <Slider {...settings}>
                {
                    packages.map(pk => <Packages key={pk._id} pk={pk}></Packages>)
                }
            </Slider>


        </div>
    )
}

export default CartSlick