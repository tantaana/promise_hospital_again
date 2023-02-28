import React from 'react';

const OneDoctor = ({ doct }) => {

    const { doctorImg, name, speciality } = doct
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={doctorImg} className ='h-64 ' alt="Dotor" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{speciality}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default OneDoctor;