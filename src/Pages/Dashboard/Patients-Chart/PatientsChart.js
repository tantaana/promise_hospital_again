import React, { useEffect, useState } from 'react';
import appoint from '../Patients-Chart/PatientsImage/appointment.png'
import patient from '../Patients-Chart/PatientsImage/patient.png'
import operation from '../Patients-Chart/PatientsImage/operation.png'
import tk from '../Patients-Chart/PatientsImage/tk.jpg'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const PatientsChart = () => {
    const data = [
        {
            "name": "21-22(1)",
            "Patients 2022": 3190,
            "Patients 2021": 2700,
            "amt": 2400
        },
        {
            "name": "21-22(2)",
            "Patients 2022": 4790,
            "Patients 2021": 300,
            "amt": 2210
        },
        {
            "name": "21-22(3)",
            "Patients 2022": 3490,
            "Patients 2021": 1160,
            "amt": 2290
        },
        {
            "name": "21-22(4)",
            "Patients 2022": 5790,
            "Patients 2021": 3300,
            "amt": 2000
        },
        {
            "name": "21-22(5)",
            "Patients 2022": 3490,
            "Patients 2021": 2270,
            "amt": 2181
        },
        {
            "name": "21-22(6)",
            "Patients 2022": 3690,
            "Patients 2021": 2200,
            "amt": 2590
        },
        {
            "name": "21-22(7)",
            "Patients 2022": 4490,
            "Patients 2021": 3300,
            "amt": 2100
        },
        {
            "name": "21-22(8)",
            "Patients 2022": 4490,
            "Patients 2021": 4700,
            "amt": 2100
        },
        {
            "name": "21-22(9)",
            "Patients 2022": 4790,
            "Patients 2021": 3300,
            "amt": 2100
        },
        {
            "name": "21-22(10)",
            "Patients 2022": 2290,
            "Patients 2021": 3300,
            "amt": 2100
        },

        {
            "name": "21-22(11)",
            "Patients 2022": 4590,
            "Patients 2021": 3700,
            "amt": 2000,
        },
        {
            "name": "21-22(12)",
            "Patients 2022": 5490,
            "Patients 2021": 3400,
            "amt": 2000,
        },
    ]
    const data1 = [
        {
            name: 'Day-1',
            uv: 590,
            incame: 70000,
            amt: 1400,
        },
        {
            name: 'Day-2',
            uv: 868,
            incame: 94467,
            amt: 1506,
        },
        {
            name: 'PDay-3',
            uv: 1397,
            incame: 106598,
            amt: 989,
        },
        {
            name: 'Day-4',
            uv: 1480,
            incame: 70200,
            amt: 1228,
        },
        {
            name: 'Day-5',
            uv: 1520,
            incame: 89108,
            amt: 1100,
        },
        {
            name: 'Day-6',
            uv: 1400,
            incame: 97680,
            amt: 1700,
        },
        {
            name: 'Day-7',
            uv: 1400,
            incame: 86680,
            amt: 1700,
        },
    ];
    const [appointment, setappointment] = useState([])
    const [appdatas, setappdatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/createAppointment')
            .then(res => res.json())
            .then(data => setappdatas(data))
    }, []);

    const handleDelete = id => {
        const process = window.confirm('Are you sure . You want to delete yous review');

        if (process) {
            fetch(`http://localhost:5000/createAppointment/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully..');
                        const remaining = appointment.filter(rev => rev._id !== id)
                        setappointment(remaining);
                        window.location.reload(false)
                    }
                })
        }
    }
    return (
        <div className='ml-12 mt-6 '>
            <div className='grid lg:grid-cols-4 grid-cols-1   mb-5 mt-3'>
                <div className=" w-64 h-20 p-4 bg-white  shadow-2xl">
                    <div className=" ">
                        <div className='flex justify-between'>
                            <img src={appoint} className="h-12 w-12 justify-center"></img>
                            <div className=" justify-center w-32 ml-7">
                                <p>Appointments</p>
                                <p>Total :{appdatas.length} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-72 h-20 p-4  bg-white  shadow-2xl">
                    <div className=" ">
                        <div className='flex justify-start'>
                            <img src={patient} className="h-12 w-12 ml-7"></img>
                            <div className="ml-7">
                                <p>New patients</p>
                                <p>Total : 230</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-64 h-20 p-4  bg-white  shadow-2xl ">
                    <div className=" ">
                        <div className='flex justify-start'>
                            <img src={operation} className="h-12 w-12 "></img>
                            <div className=" ml-7">
                                <p>Operations</p>
                                <p>Total: 35 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-64 h-20 p-4  bg-white  shadow-2xl ">
                    <div className="">
                        <div className=' flex justify-center'>
                            <img src={tk} className="h-16 w-12"></img>
                            <div className="ml-7">
                                <p>Hospital Earning</p>
                                <p>Total : 1,20,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-3xl mb-12 mt-8'>Hospital survey</p>
                <LineChart width={1230} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="Patients 2021" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Patients 2022" stroke="#82ca9d" />
                </LineChart>
            </div>
            <p className='text-xl mt-9 mb-5 text-center'>Income in current week</p>
            <div className='text-center ml-64'>

                <ComposedChart
                    width={800}
                    height={400}
                    data={data1}
                    margin={{
                        top: 20,
                        right: 80,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis
                        dataKey="name"
                        label={{ value: "", position: "insideBottomRight", offset: 0 }}
                        scale="band"
                    />
                    <YAxis label={{ value: "", angle: -90, position: "insideLeft" }} />
                    <Legend />
                    <Area type="monotone" dataKey="" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="incame" barSize={20} fill="#413ea0" />
                    {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
                </ComposedChart>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <p className='text-2xl mt-9 mb-7 '>Appointments</p>
                    <table className="table w-full border-separate  border border-slate-500 mb-9">

                        <thead>
                            <tr>
                                <th>Count</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Number</th>
                                <th>Doctor</th>
                                {/* <th>Condition</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appdatas.map((appdata, i) => {
                                    return <tr key={appdata._id}>

                                        <th>{i + 1}</th>
                                        <td>{appdata.patientName}</td>
                                        <td>{appdata.patientEmail}</td>
                                        <td>{appdata.docName}</td>
                                        <td>{appdata.patientNumber}</td>
                                        <td>{appdata.docName}</td>
                                        <td><Link onClick={() => handleDelete(appdata._id)}><FaTimes></FaTimes></Link>  </td>
                                        {/* <td><button  onClick={() => handleOrder('Cancel')}></button></td> */}


                                    </tr>;
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PatientsChart;