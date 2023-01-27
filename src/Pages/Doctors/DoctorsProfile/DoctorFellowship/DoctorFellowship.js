import React from 'react';

const DoctorFellowship = ({ fellow }) => {
    const { info } = fellow
    return (
        <>
            <ul className="list-disc my-4">
                {
                    info.map(inf => <li className="my-4 font-medium">{inf}</li>)
                }
            </ul>
        </>
    );
};

export default DoctorFellowship;