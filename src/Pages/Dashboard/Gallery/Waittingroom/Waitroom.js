import React from 'react';

const Waitroom =({ imag }) => {
    const { img } = imag;
    return (
        <div className=''>

            <img className='h-48 w-80' src={img}></img>

        </div>
    );
};
    

export default Waitroom;
