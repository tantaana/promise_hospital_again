import React from 'react';
import { Link } from 'react-router-dom';

const HomeCarousel = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://storage.googleapis.com/jacksonh/1/JHS_International-2.jpg" className="h-[400px] md:h-[600px] w-full object-cover brightness-50" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle border-none bg-transparent">❮</a>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <h2 className='text-center font-bold text-2xl md:text-3xl text-white'>Welcome to <span className='text-blue-500'>promise</span><span className='text-teal-500'>hospital</span> !</h2>
                            <h2 className='text-center text-white text-sm md:text-xl'>You've come the right place to get the best treatment available on the country.</h2>
                            <Link to='/plan'><button className='btn btn-success btn-sm md:btn-md btn-outline font-bold text-lg'>Plan Your Visit !</button></Link>
                        </div>
                        <a href="#slide2" className="btn btn-circle border-none bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.aamc.org/sites/default/files/Treatment%20at%20MHS_1200x666.jpg" className="h-[400px] md:h-[600px] w-full object-cover brightness-50" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle border-none bg-transparent">❮</a>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <h2 className='text-center font-bold text-2xl md:text-3xl text-white'>Pick Your <span className='text-blue-500'>Favourite</span> <span className='text-teal-500'>Doctor</span> !</h2>
                            <h2 className='text-center text-white text-sm md:text-xl'>Best doctor of the country are available in our hospital. Just make an appointment and get them on your desired time.</h2>
                            <Link to='/doctors'><button className='btn btn-info btn-sm md:btn-md btn-outline font-bold text-lg'>Pick Your Doctor !</button></Link>
                        </div>
                        <a href="#slide3" className="btn btn-circle border-none bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.evercarebd.com/wp-content/uploads/2022/08/PhotoGhor_067122-1024x683.jpeg" className="h-[400px] md:h-[600px] w-full object-cover brightness-50" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle border-none bg-transparent">❮</a>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <h2 className='text-center font-bold text-2xl md:text-3xl text-white'>Special <span className='text-blue-500'>Doctors</span> Are <span className='text-teal-500'>Here</span> !</h2>
                            <h2 className='text-center text-white text-sm md:text-xl'>We have the award winning doctors in our hospital who are specialized in various fields.</h2>
                            <Link to='/specialities'><button className='btn btn-success btn-sm md:btn-md btn-outline font-bold text-lg'>Specialities</button></Link>
                        </div>
                        <a href="#slide4" className="btn btn-circle border-none bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/FTAPUQUL2RBQRFCHK6LFQ44NAI.jpg" className="h-[400px] md:h-[600px] w-full object-cover brightness-50" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle border-none bg-transparent">❮</a>
                        <div className='flex flex-col justify-center items-center gap-8'>
                            <h2 className='text-center font-bold text-2xl md:text-3xl text-white'>We have the best <span className='text-blue-500'>Emergency</span> <span className='text-teal-500'>Support</span> !</h2>
                            <h2 className='text-center text-white text-sm md:text-xl'>A massive number of nurses and assistants are working hard 24X7 to give you the best treatment for your emergency patients.</h2>
                            <Link to='/packages'><button className='btn btn-info btn-sm md:btn-md btn-outline font-bold text-lg'>Packages</button></Link>
                        </div>
                        <a href="#slide1" className="btn btn-circle border-none bg-transparent">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;