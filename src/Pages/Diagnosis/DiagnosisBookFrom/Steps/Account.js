import React, { useContext } from 'react';
import { StepFormContext } from '../../../../context/StepperFormContext/StepperFormContext';

const Account = ({ price, testName }) => {
    const { userData, setUserData } = useContext(StepFormContext)
    // console.log(userData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value, price, testName })
    }
    return (
        <div className="flex flex-col ">
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    First Name
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input required
                        onChange={handleChange}
                        value={userData["FirstName"] || ""}
                        name="FirstName"
                        placeholder="First Name"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Last Name
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input required
                        onChange={handleChange}
                        value={userData["LastName"] || ""}
                        name="LastName"
                        placeholder="Last Name"
                        type="text"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Price
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input readOnly
                        onChange={handleChange}
                        defaultValue={price}
                        // name="price"
                        placeholder=""
                        type="text"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Price
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input readOnly
                        onChange={handleChange}
                        defaultValue={testName}
                        // name="TestName"
                        placeholder=""
                        type="text"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full flex-1">
                <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
                    Age
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input required
                        onChange={handleChange}
                        value={userData["age"] || ""}
                        name="age"
                        placeholder="age"
                        type="text"
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default Account;