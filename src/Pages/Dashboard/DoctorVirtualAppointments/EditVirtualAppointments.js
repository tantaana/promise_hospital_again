import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const EditVirtualAppointments = ({ editData, user, setEditData }) => {
    console.log(editData)

    const uri = `https://promise-hospoital-server-jahid900pj.vercel.app/edit/virtualAppointment/${user?.email}`

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const meet_link = form.meet_link.value
        // console.log(meet_link)



        const Meet_link = [
            meet_link
        ]

        // const link = {
        //     meet_link
        // }


        fetch(uri, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(link),
            body: JSON.stringify(Meet_link),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                toast.success('Meet link provided successfully')
                form.reset();
                setEditData(null)



            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="edit-virtual-appointment" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {/* <label htmlFor="make-doctor-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
                    <h3 className="text-lg font-semibold my-5">Provide meeting link <span className='font-bold'>{editData?.patientName}</span> from user list?</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="">
                            <input required type="text" name='meet_link' placeholder="Type here" className="input input-bordered input-accent w-full " />
                        </div>

                        <div className='flex justify-end items-center gap-4 mt-4'>
                            <button type="submit" className='btn glass bg-blue-500 hover:bg-blue-700 text-black btn-outline'>Confirm</button>
                            <label htmlFor="edit-virtual-appointment" className="btn glass bg-teal-500 hover:bg-teal-600 text-black btn-outline">Cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditVirtualAppointments;