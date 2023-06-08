import React from 'react';

const MakeDoctorModal = ({ getData, handleMakeDoctor }) => {



    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="make-doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* <label htmlFor="make-doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <h3 className="text-lg font-semibold mt-6 mb-4">Are you sure you want to make <span className='font-bold'>{getData?.name}</span> as a doctor?</h3>
                    <h3 className='text-red-500 text-lg font-semibold mb-10'>*This action cannot be <span className='font-bold'>undone</span></h3>
                    <div className='flex justify-end items-center gap-4'>
                        <button onClick={() => handleMakeDoctor(getData?._id)} className='btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline'>Confirm</button>
                        <label htmlFor="make-doctor-modal" className="btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeDoctorModal;