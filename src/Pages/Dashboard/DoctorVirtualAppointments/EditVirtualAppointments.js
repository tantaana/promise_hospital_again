import React from 'react';

const EditVirtualAppointments = ({ editData }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-virtual-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* <label htmlFor="make-doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <h3 className="text-lg font-semibold my-10">Are you sure you want to remove {editData?._id} <span className='font-bold'>edit</span> from user list?</h3>
                    <div className='flex justify-end items-center gap-4'>
                        {/* <button onClick={() => handleDeleteUser(removeData?._id)} className='btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline'>Confirm</button> */}
                        <label htmlFor="edit-virtual-appointment" className="btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditVirtualAppointments;