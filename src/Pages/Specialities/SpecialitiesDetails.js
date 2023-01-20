import React from 'react';
import { useLoaderData } from 'react-router-dom';
import bg1 from "../Specialities/SpecialitiesImg/spbg.jpg"

const SpecialitiesDetails = () => {
    const detail = useLoaderData();
    return (
        <div style={
            {
                background: `url(${bg1})`,
                padding: 20,
                height: '100%',

            }
        }>
            <div>
                <img src={detail.bgimg} className='w-full ' style={{height:400}} alt="" />
                <p className='text-blue-600 font-bold text-3xl p-5'>{detail.title}</p>
                <p className='text-blue-600  text-xl p-5 bg-slate-400'> {detail.det}</p>
                <p></p>
            </div>
        </div>
    );
};

export default SpecialitiesDetails;