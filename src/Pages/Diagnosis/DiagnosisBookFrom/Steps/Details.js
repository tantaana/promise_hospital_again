import React, { useContext } from 'react';
import { StepFormContext } from '../../../../context/StepperFormContext/StepperFormContext';

const Details = () => {
    const { userData, setUserData } = useContext(StepFormContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex flex-col ">
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Address
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["address"] || ""}
                        name="address"
                        placeholder="Address"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Gander
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <select
                        className="select p-1 px-2 appearance-none outline-none w-full text-gray-800"
                        onChange={handleChange}
                        value={userData["gander"] || ""}
                        name="gander"
                    >
                        <option disabled selected>Gander</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>

                    </select>
                </div>
            </div>
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Mobile Number
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["city"] || ""}
                        name="city"
                        placeholder="City"
                        type="text"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>
            <div className="w-full mx-2 flex-1">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                    Contact E-mail
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                    <input
                        onChange={handleChange}
                        value={userData["email"] || ""}
                        name="email"
                        placeholder="Contact E-mail"
                        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                </div>
            </div>



        </div>
    );
};

export default Details;