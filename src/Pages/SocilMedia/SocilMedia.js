import React from 'react';
import { Link } from 'react-router-dom';

const SocilMedia = () => {
    return (
        <div>
            <div className=" w-full">
                <div className=" w-full">
                    <img src="https://www.manipalhospitalsglobal.com/assets/images/social-media-banner.png" className="w-full" alt='' />
                </div>
            </div>



            <div className='flex mt-[4%] mx-[10%] '>
                <input type="text" style={{ border: '3px solid #0c51a1' }} placeholder="Search by Post" className="input input-bordered  w-full " />
                <button style={{ background: "linear-gradient(90deg,#034ea1 0,#00b7ac 100%),#c4c4c4", color: 'white' }} className='px-[50px]  rounded ' >
                    <Link to={'#'}>Shearch </Link>
                </button>
            </div>





            <div style={{
                marginTop: '4%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridColumnGap: '2%',
                marginLeft: '10%',
                marginRight: '10%'
            }}
            >

                <div style={{

                    borderTop: '10px solid',
                    borderTopLeftRadius: '30px', /* set the left border-radius */
                    borderTopRightRadius: '30px',
                    borderStyle: 'solid', borderImage: 'linear-gradient(to right, #034ea1 0, #00b7ac 100%) 1',
                    borderRight: '1px solid red',
                    borderBottom: '1px solid red',
                    borderLeft: '1px solid red',

                }} className='mt-5'>

                    <div>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/social_media/thumb/national-cancer-survivors-day_1.webp" alt="" />
                    </div>
                    <div>
                        <div className='text-lg font-bold' style={{ color: '#034ea1' }}>
                            Most cancers can be treated effectively if di ...
                        </div>
                        <div >
                            Most cancers can be treated effectively if diagnosed at an early stage. Look out for the symptoms and visit the hospital, if you notice anything...
                        </div>
                        <button style={{ backgroundColor: '#00b7ac ', padding: '10px', marginTop: '13px', color: 'white' }} className=' w-full rounded ' >
                            <Link to={'#'}>Shearch </Link>
                        </button>
                    </div>




                </div>















                <div style={{


                    borderTop: '10px solid',
                    borderTopLeftRadius: '30px', /* set the left border-radius */
                    borderTopRightRadius: '30px',
                    borderStyle: 'solid', borderImage: 'linear-gradient(to right, #034ea1 0, #00b7ac 100%) 1',
                    borderRight: '1px solid red',
                    borderBottom: '1px solid red',
                    borderLeft: '1px solid red',

                }} className='mt-5'>

                    <div>
                        <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/social_media/thumb/national-cancer-survivors-day_1.webp" alt="" />
                    </div>
                    <div>
                        <div className='text-lg font-bold' style={{ color: '#034ea1' }}>
                            Most cancers can be treated effectively if di ...
                        </div>
                        <div >
                            Most cancers can be treated effectively if diagnosed at an early stage. Look out for the symptoms and visit the hospital, if you notice anything...
                        </div>
                    </div>
                    <button style={{ backgroundColor: '#00b7ac ', padding: '10px', marginTop: '13px', color: 'white' }} className=' w-full rounded ' >
                        <Link to={'#'}>Shearch </Link>
                    </button>


                </div>










                <div style={{

                    borderTop: '10px solid',
                    borderTopLeftRadius: '30px', /* set the left border-radius */
                    borderTopRightRadius: '30px',
                    borderStyle: 'solid', borderImage: 'linear-gradient(to right, #034ea1 0, #00b7ac 100%) 1',
                    borderRight: '1px solid red',
                    borderBottom: '1px solid red',
                    borderLeft: '1px solid red',
                }} className='mt-5'>

                    <div style={{}}>
                        <div>
                            <img src="https://www.manipalhospitalsglobal.com/assets/frontend-assets/images/social_media/thumb/national-cancer-survivors-day_1.webp" alt="" />
                        </div>
                        <div>
                            <div className='text-lg font-bold' style={{ color: '#034ea1' }}>
                                Most cancers can be treated effectively if di ...
                            </div>
                            <div >
                                Most cancers can be treated effectively if diagnosed at an early stage. Look out for the symptoms and visit the hospital, if you notice anything...
                            </div>
                        </div>
                    </div>
                    <button>

                    </button>

                    <button style={{ backgroundColor: '#00b7ac ', padding: '10px', marginTop: '13px', color: 'white' }} className=' w-full rounded ' >
                        <Link to={'#'}>Shearch </Link>
                    </button>

                </div>












            </div>



            <div className='text-center mt-[100px]'>
                <button style={{ backgroundColor: '#034ea1', padding: '10px', marginTop: '13px', color: 'white' }} className=' w-[12%] rounded ' >
                    <Link to={'#'}>View All </Link>
                </button>
            </div>


        </div>
    );
};

export default SocilMedia;