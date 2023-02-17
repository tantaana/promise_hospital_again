import React from 'react';

const RemoveDoctorModal = ({ removeData, handleDeleteUser }) => {
    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="remove-doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* <label htmlFor="make-doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <h3 className="text-lg font-semibold my-10">Are you sure you want to remove <span className='font-bold'>{removeData?.name}</span> from user list?</h3>
                    <div className='flex justify-end items-center gap-4'>
                        <button onClick={() => handleDeleteUser(removeData?._id)} className='btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline'>Confirm</button>
                        <label htmlFor="remove-doctor-modal" className="btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveDoctorModal;